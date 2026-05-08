# apps/analytics/views.py
from django.db.models import Sum, Count
from django.db.models.functions import TruncMonth

from rest_framework.views import APIView
from rest_framework.response import Response

from drf_spectacular.utils import extend_schema

from apps.fellowship.models import FellowshipEvent


# 1. Monthly Attendance
@extend_schema(tags=['Analytics'])
class MonthlyAttendanceAPIView(APIView):

    def get(self, request):

        year = request.GET.get('year')

        month = request.GET.get('month')

        qs = FellowshipEvent.objects.all()

        if year:
            qs = qs.filter(
                date__year=year
            )

        if month:
            qs = qs.filter(
                date__month=month
            )

        qs = qs.annotate(
            month_date=TruncMonth('date')
        ).values(
            'month_date'
        ).annotate(
            total=Sum('attendance_count')
        ).order_by(
            'month_date'
        )

        data = [
            {
                "month": item['month_date'].strftime("%b"),
                "attendance": item['total'] or 0
            }
            for item in qs
        ]

        return Response(data)


# 2. Attendance Trend (last 10)
@extend_schema(tags=['Analytics'])
class AttendanceTrendAPIView(APIView):

    def get(self, request):
        qs = (
            FellowshipEvent.objects
            .order_by('-date')[:10]
        )

        data = [
            {
                "date": event.date,
                "attendance": event.attendance_count
            }
            for event in reversed(qs)
        ]

        return Response(data)


# 3. Fellowship Count per Month
@extend_schema(tags=['Analytics'])
class FellowshipCountAPIView(APIView):

    def get(self, request):
        qs = (
            FellowshipEvent.objects
            .annotate(month_date=TruncMonth('date'))
            .values('month')
            .annotate(total=Count('id'))
            .order_by('month')
        )

        data = [
            {
                "month": item['month'].strftime("%b"),
                "total": item['total']
            }
            for item in qs
        ]

        return Response(data)