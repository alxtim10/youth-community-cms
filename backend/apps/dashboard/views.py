from datetime import date

from django.db.models import Avg

from rest_framework.views import APIView
from rest_framework.response import Response

from drf_spectacular.utils import (
    extend_schema,
)

from apps.members.models import Member

from apps.fellowship.models import (
    FellowshipEvent
)

from .serializers import (
    SimpleFellowshipSerializer
)


@extend_schema(
    tags=['Dashboard'],
    summary='Dashboard statistics',
)
class DashboardStatisticsAPIView(APIView):

    def get(self, request):
        total_members = Member.objects.count()

        total_fellowships = (
            FellowshipEvent.objects.count()
        )

        average_attendance = (
            FellowshipEvent.objects.aggregate(
                avg=Avg('attendance_count')
            )['avg']
        )

        highest_attendance_event = (
            FellowshipEvent.objects.order_by(
                '-attendance_count'
            ).first()
        )

        latest_fellowship = (
            FellowshipEvent.objects.order_by(
                '-date'
            ).first()
        )

        upcoming_fellowship = (
            FellowshipEvent.objects.filter(
                date__gte=date.today()
            ).order_by('date').first()
        )

        data = {
            'total_members': total_members,

            'total_fellowships':
                total_fellowships,

            'average_attendance':
                average_attendance or 0,

            'highest_attendance_event':
                (
                    SimpleFellowshipSerializer(
                        highest_attendance_event
                    ).data
                    if highest_attendance_event
                    else None
                ),

            'latest_fellowship':
                (
                    SimpleFellowshipSerializer(
                        latest_fellowship
                    ).data
                    if latest_fellowship
                    else None
                ),

            'upcoming_fellowship':
                (
                    SimpleFellowshipSerializer(
                        upcoming_fellowship
                    ).data
                    if upcoming_fellowship
                    else None
                ),
        }

        return Response(data)