from django.urls import path
from . import views

urlpatterns = [
    path('', views.TeamListView.as_view(), name='team-list'),
    path('<str:pk>/', views.TeamDetailView.as_view(), name='team-detail'),
    path('<str:team_id>/squad/', views.TeamSquadView.as_view(), name='team-squad'),
    path('players/', views.PlayerListView.as_view(), name='player-list'),
]
