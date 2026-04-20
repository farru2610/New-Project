import random
from rest_framework import generics, serializers, views, status
from rest_framework.response import Response
from .models import Match, Innings, BatsmanScore, BowlingFigure, BallByBall
from apps.teams.models import Team, Player


class MatchSerializer(serializers.ModelSerializer):
    team1_name = serializers.CharField(source='team1.name', read_only=True)
    team2_name = serializers.CharField(source='team2.name', read_only=True)
    winner_name = serializers.CharField(source='winner.name', read_only=True, allow_null=True)

    class Meta:
        model = Match
        fields = '__all__'


class MatchCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ['team1', 'team2', 'format', 'venue', 'pitch_conditions', 'weather', 'difficulty', 'tournament']


class MatchListView(generics.ListAPIView):
    queryset = Match.objects.select_related('team1', 'team2', 'winner').all()
    serializer_class = MatchSerializer


class MatchCreateView(generics.CreateAPIView):
    queryset = Match.objects.all()
    serializer_class = MatchCreateSerializer


class MatchDetailView(generics.RetrieveAPIView):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer


class MatchScorecardView(views.APIView):
    def get(self, request, pk):
        try:
            match = Match.objects.get(pk=pk)
        except Match.DoesNotExist:
            return Response({'error': 'Match not found'}, status=404)

        scorecard = []
        for innings in match.innings.all():
            batting_scores = []
            for sc in innings.batting_scores.select_related('player').all():
                batting_scores.append({
                    'player': sc.player.name,
                    'runs': sc.runs,
                    'balls': sc.balls,
                    'fours': sc.fours,
                    'sixes': sc.sixes,
                    'strike_rate': sc.strike_rate,
                    'dismissal': sc.dismissal_type,
                })

            bowling_figures = []
            for fig in innings.bowling_figures.select_related('player').all():
                bowling_figures.append({
                    'player': fig.player.name,
                    'overs': fig.overs,
                    'maidens': fig.maidens,
                    'runs': fig.runs,
                    'wickets': fig.wickets,
                    'economy': fig.economy,
                })

            scorecard.append({
                'innings_number': innings.innings_number,
                'batting_team': innings.batting_team.name,
                'total_runs': innings.total_runs,
                'total_wickets': innings.total_wickets,
                'total_overs': innings.total_overs,
                'batting_scores': batting_scores,
                'bowling_figures': bowling_figures,
            })

        return Response({'match': MatchSerializer(match).data, 'scorecard': scorecard})


class SimulateBallView(views.APIView):
    """
    Backend simulation endpoint.
    POST body: { batsman_id, bowler_id, shot_type, delivery_type, fielding_mode, aggression }
    Returns: { outcome, runs, is_wicket, wicket_type, commentary, ... }
    """

    BASE_PROBS = {
        '0': 0.30, '1': 0.26, '2': 0.09, '3': 0.015,
        '4': 0.12, '6': 0.05, 'W': 0.08, 'WD': 0.035,
        'NB': 0.015, 'LB': 0.01,
    }

    def post(self, request, match_id):
        data = request.data
        batsman_id = data.get('batsman_id')
        bowler_id = data.get('bowler_id')
        shot_type = data.get('shot_type', 'drive')
        delivery_type = data.get('delivery_type', 'good_length')
        fielding_mode = data.get('fielding_mode', 'balanced')
        aggression = int(data.get('aggression', 5))

        try:
            batsman = Player.objects.get(id=batsman_id)
            bowler = Player.objects.get(id=bowler_id)
        except Player.DoesNotExist:
            return Response({'error': 'Player not found'}, status=400)

        result = self.simulate(batsman, bowler, shot_type, delivery_type, fielding_mode, aggression)
        return Response(result)

    def simulate(self, batsman, bowler, shot_type, delivery_type, fielding_mode, aggression):
        probs = dict(self.BASE_PROBS)

        # Batsman modifier
        br = batsman.batting_rating / 100
        probs['4'] *= (0.3 + br * 1.1)
        probs['6'] *= (0.2 + br * 0.9)
        probs['W'] *= max(0.3, 2.0 - br * 1.6)

        # Bowler modifier
        bwl = bowler.bowling_rating / 100
        probs['W'] *= (0.4 + bwl * 1.2)
        probs['0'] *= (0.5 + bwl * 0.9)

        # Normalize
        total = sum(probs.values())
        probs = {k: v/total for k, v in probs.items()}

        # Weighted random
        outcome = self._weighted_random(probs)
        runs = 0 if outcome == 'W' else (1 if outcome in ('WD','NB','LB') else int(outcome) if outcome.isdigit() else 0)

        return {
            'outcome': outcome,
            'runs': runs,
            'is_wicket': outcome == 'W',
            'is_extra': outcome in ('WD', 'NB', 'LB'),
            'is_boundary': outcome == '4',
            'is_six': outcome == '6',
            'wicket_type': random.choice(['caught', 'bowled', 'lbw', 'stumped', 'run_out']) if outcome == 'W' else None,
            'commentary': f"{bowler.name} bowls to {batsman.name} — {outcome}",
        }

    def _weighted_random(self, probs):
        r = random.random()
        for outcome, p in probs.items():
            r -= p
            if r <= 0:
                return outcome
        return '0'
