from django.urls import path
from . import views

urlpatterns = [
    path('', views.TournamentListView.as_view(), name='tournament-list'),
    path('<str:pk>/', views.TournamentDetailView.as_view(), name='tournament-detail'),
    path('<str:pk>/standings/', views.TournamentStandingsView.as_view(), name='tournament-standings'),
]
