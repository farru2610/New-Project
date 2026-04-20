from rest_framework import generics, serializers, views
from rest_framework.response import Response
from .models import Tournament, TournamentStanding


class TournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = '__all__'


class StandingSerializer(serializers.ModelSerializer):
    team_name = serializers.CharField(source='team.name', read_only=True)
    team_short = serializers.CharField(source='team.short_name', read_only=True)
    team_flag = serializers.CharField(source='team.flag', read_only=True)

    class Meta:
        model = TournamentStanding
        fields = '__all__'


class TournamentListView(generics.ListAPIView):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer


class TournamentDetailView(generics.RetrieveAPIView):
    queryset = Tournament.objects.prefetch_related('teams').all()
    serializer_class = TournamentSerializer


class TournamentStandingsView(views.APIView):
    def get(self, request, pk):
        standings = TournamentStanding.objects.filter(
            tournament_id=pk
        ).select_related('team').order_by('-points', '-net_run_rate')
        return Response(StandingSerializer(standings, many=True).data)
