from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/teams/', include('apps.teams.urls')),
    path('api/matches/', include('apps.matches.urls')),
    path('api/tournaments/', include('apps.tournaments.urls')),
]
