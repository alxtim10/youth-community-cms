
from django.urls import path

from .views import (
    MonthlyAttendanceAPIView,
    AttendanceTrendAPIView,
    FellowshipCountAPIView,
)

urlpatterns = [
    path(
        'monthly-attendance/',
        MonthlyAttendanceAPIView.as_view()
    ),
    path(
        'attendance-trend/',
        AttendanceTrendAPIView.as_view()
    ),
    path(
        'fellowship-count/',
        FellowshipCountAPIView.as_view()
    ),
]