from django.urls import path
from . import views

urlpatterns = [
    path('', views.MatchListView.as_view(), name='match-list'),
    path('create/', views.MatchCreateView.as_view(), name='match-create'),
    path('<int:pk>/', views.MatchDetailView.as_view(), name='match-detail'),
    path('<int:pk>/scorecard/', views.MatchScorecardView.as_view(), name='match-scorecard'),
    path('<int:match_id>/simulate-ball/', views.SimulateBallView.as_view(), name='simulate-ball'),
]
