from django.db import models
from apps.teams.models import Team


class Tournament(models.Model):
    FORMAT_CHOICES = [
        ('T20', 'T20'),
        ('ODI', 'ODI'),
        ('TEST', 'Test'),
        ('100ball', '100-ball'),
    ]

    STATUS_CHOICES = [
        ('upcoming', 'Upcoming'),
        ('group_stage', 'Group Stage'),
        ('knockout', 'Knockout'),
        ('completed', 'Completed'),
    ]

    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=150)
    short_name = models.CharField(max_length=20, blank=True)
    organizer = models.CharField(max_length=100, blank=True)
    format = models.CharField(max_length=10, choices=FORMAT_CHOICES, default='T20')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='upcoming')
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    teams = models.ManyToManyField(Team, related_name='tournaments', blank=True)
    winner = models.ForeignKey(Team, on_delete=models.SET_NULL, null=True, blank=True, related_name='tournament_wins')
    total_teams = models.IntegerField(default=8)
    total_matches = models.IntegerField(default=0)
    overs_per_side = models.IntegerField(default=20)
    emblem = models.CharField(max_length=10, default='🏆')
    is_active = models.BooleanField(default=False)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class TournamentGroup(models.Model):
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE, related_name='groups')
    name = models.CharField(max_length=50)  # Group A, Group B, etc.
    teams = models.ManyToManyField(Team, related_name='tournament_groups', blank=True)

    def __str__(self):
        return f"{self.tournament.short_name} - {self.name}"


class TournamentStanding(models.Model):
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE, related_name='standings')
    group = models.ForeignKey(TournamentGroup, on_delete=models.SET_NULL, null=True, blank=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    played = models.IntegerField(default=0)
    won = models.IntegerField(default=0)
    lost = models.IntegerField(default=0)
    tied = models.IntegerField(default=0)
    no_result = models.IntegerField(default=0)
    points = models.IntegerField(default=0)
    net_run_rate = models.FloatField(default=0.0)
    runs_for = models.IntegerField(default=0)
    runs_against = models.IntegerField(default=0)
    overs_for = models.FloatField(default=0.0)
    overs_against = models.FloatField(default=0.0)

    class Meta:
        ordering = ['-points', '-net_run_rate']
        unique_together = ['tournament', 'team']

    def __str__(self):
        return f"{self.tournament.short_name} - {self.team.short_name}: {self.points} pts"
