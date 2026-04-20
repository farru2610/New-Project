from rest_framework import generics, serializers
from .models import Team, Player


class PlayerSerializer(serializers.ModelSerializer):
    overall_rating = serializers.ReadOnlyField()

    class Meta:
        model = Player
        fields = '__all__'


class TeamSerializer(serializers.ModelSerializer):
    players = PlayerSerializer(many=True, read_only=True)

    class Meta:
        model = Team
        fields = '__all__'


class TeamListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'short_name', 'flag', 'rating', 'team_type', 'primary_color']


class TeamListView(generics.ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamListSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        team_type = self.request.query_params.get('type')
        if team_type:
            qs = qs.filter(team_type=team_type)
        return qs


class TeamDetailView(generics.RetrieveAPIView):
    queryset = Team.objects.prefetch_related('players')
    serializer_class = TeamSerializer


class TeamSquadView(generics.ListAPIView):
    serializer_class = PlayerSerializer

    def get_queryset(self):
        return Player.objects.filter(team_id=self.kwargs['team_id'])


class PlayerListView(generics.ListAPIView):
    queryset = Player.objects.select_related('team').all()
    serializer_class = PlayerSerializer
