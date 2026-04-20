from django.db import models
from apps.teams.models import Team, Player


class Match(models.Model):
    FORMAT_CHOICES = [
        ('T20', 'T20'),
        ('ODI', 'ODI'),
        ('TEST', 'Test'),
    ]

    STATUS_CHOICES = [
        ('scheduled', 'Scheduled'),
        ('live', 'Live'),
        ('completed', 'Completed'),
        ('abandoned', 'Abandoned'),
    ]

    team1 = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='home_matches')
    team2 = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='away_matches')
    format = models.CharField(max_length=10, choices=FORMAT_CHOICES, default='T20')
    venue = models.CharField(max_length=100, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='scheduled')
    toss_winner = models.ForeignKey(Team, on_delete=models.SET_NULL, null=True, blank=True, related_name='toss_wins')
    toss_choice = models.CharField(max_length=10, blank=True)  # 'bat' or 'bowl'
    winner = models.ForeignKey(Team, on_delete=models.SET_NULL, null=True, blank=True, related_name='match_wins')
    win_margin = models.CharField(max_length=50, blank=True)
    pitch_conditions = models.CharField(max_length=20, default='balanced')
    weather = models.CharField(max_length=20, default='sunny')
    difficulty = models.CharField(max_length=10, default='medium')
    tournament = models.ForeignKey('tournaments.Tournament', on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return f"{self.team1.short_name} vs {self.team2.short_name} ({self.format})"


class Innings(models.Model):
    match = models.ForeignKey(Match, on_delete=models.CASCADE, related_name='innings')
    innings_number = models.IntegerField(default=1)
    batting_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='batting_innings')
    bowling_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='bowling_innings')
    total_runs = models.IntegerField(default=0)
    total_wickets = models.IntegerField(default=0)
    total_overs = models.FloatField(default=0.0)
    extras = models.IntegerField(default=0)
    is_completed = models.BooleanField(default=False)

    class Meta:
        ordering = ['innings_number']
        unique_together = ['match', 'innings_number']

    def __str__(self):
        return f"{self.match} - Innings {self.innings_number}"


class BatsmanScore(models.Model):
    innings = models.ForeignKey(Innings, on_delete=models.CASCADE, related_name='batting_scores')
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    runs = models.IntegerField(default=0)
    balls = models.IntegerField(default=0)
    fours = models.IntegerField(default=0)
    sixes = models.IntegerField(default=0)
    dismissal_type = models.CharField(max_length=50, blank=True)
    batting_position = models.IntegerField(default=1)

    @property
    def strike_rate(self):
        if self.balls == 0:
            return 0
        return round((self.runs / self.balls) * 100, 2)

    def __str__(self):
        return f"{self.player.name}: {self.runs}({self.balls})"


class BowlingFigure(models.Model):
    innings = models.ForeignKey(Innings, on_delete=models.CASCADE, related_name='bowling_figures')
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    overs = models.FloatField(default=0)
    maidens = models.IntegerField(default=0)
    runs = models.IntegerField(default=0)
    wickets = models.IntegerField(default=0)
    wides = models.IntegerField(default=0)
    no_balls = models.IntegerField(default=0)

    @property
    def economy(self):
        if self.overs == 0:
            return 0
        return round(self.runs / self.overs, 2)

    def __str__(self):
        return f"{self.player.name}: {self.wickets}/{self.runs} ({self.overs})"


class BallByBall(models.Model):
    innings = models.ForeignKey(Innings, on_delete=models.CASCADE, related_name='balls')
    over_number = models.IntegerField()
    ball_number = models.IntegerField()
    batsman = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='faced_balls')
    bowler = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='bowled_balls')
    runs = models.IntegerField(default=0)
    is_wicket = models.BooleanField(default=False)
    wicket_type = models.CharField(max_length=30, blank=True)
    is_extra = models.BooleanField(default=False)
    extra_type = models.CharField(max_length=10, blank=True)
    shot_type = models.CharField(max_length=30, blank=True)
    delivery_type = models.CharField(max_length=30, blank=True)
    commentary = models.TextField(blank=True)

    class Meta:
        ordering = ['over_number', 'ball_number']

    def __str__(self):
        return f"Over {self.over_number}.{self.ball_number}: {self.runs} runs"
