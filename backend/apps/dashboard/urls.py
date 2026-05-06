from django.urls import path

from .views import (
    DashboardStatisticsAPIView,
)

urlpatterns = [
    path(
        '',
        DashboardStatisticsAPIView.as_view(),
        name='dashboard-statistics',
    ),
]