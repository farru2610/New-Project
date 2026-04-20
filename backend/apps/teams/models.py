from django.db import models


class Team(models.Model):
    TEAM_TYPE_CHOICES = [
        ('international', 'International'),
        ('ipl', 'IPL'),
        ('bbl', 'BBL'),
        ('psl', 'PSL'),
        ('sa20', 'SA20'),
        ('cpl', 'CPL'),
    ]

    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    short_name = models.CharField(max_length=10)
    flag = models.CharField(max_length=10, default='🏏')
    rating = models.IntegerField(default=80)
    primary_color = models.CharField(max_length=10, default='#000000')
    secondary_color = models.CharField(max_length=10, default='#FFFFFF')
    team_type = models.CharField(max_length=20, choices=TEAM_TYPE_CHOICES, default='international')
    home_ground = models.CharField(max_length=100, blank=True)

    class Meta:
        ordering = ['-rating']

    def __str__(self):
        return self.name


class Player(models.Model):
    ROLE_CHOICES = [
        ('Batsman', 'Batsman'),
        ('Bowler', 'Bowler'),
        ('All-rounder', 'All-rounder'),
        ('WK-Batsman', 'WK-Batsman'),
    ]

    BATTING_STYLE_CHOICES = [
        ('Right-hand bat', 'Right-hand bat'),
        ('Left-hand bat', 'Left-hand bat'),
    ]

    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='players')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='Batsman')
    batting_rating = models.IntegerField(default=60)
    bowling_rating = models.IntegerField(default=10)
    batting_style = models.CharField(max_length=30, choices=BATTING_STYLE_CHOICES, default='Right-hand bat')
    bowling_style = models.CharField(max_length=50, blank=True)
    batting_avg = models.FloatField(default=30.0)
    batting_sr = models.FloatField(default=120.0)
    bowling_economy = models.FloatField(default=7.5)
    age = models.IntegerField(default=25)
    country = models.CharField(max_length=50, blank=True)
    is_captain = models.BooleanField(default=False)
    is_keeper = models.BooleanField(default=False)

    class Meta:
        ordering = ['-batting_rating']

    def __str__(self):
        return f"{self.name} ({self.team.short_name})"

    @property
    def overall_rating(self):
        if self.role in ['Batsman', 'WK-Batsman']:
            return int(self.batting_rating * 0.8 + self.bowling_rating * 0.2)
        elif self.role == 'Bowler':
            return int(self.batting_rating * 0.2 + self.bowling_rating * 0.8)
        return int((self.batting_rating + self.bowling_rating) / 2)
