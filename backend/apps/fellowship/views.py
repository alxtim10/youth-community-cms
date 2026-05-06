from rest_framework import generics

from drf_spectacular.utils import (
    extend_schema
)

from .models import FellowshipEvent
from .serializers import (
    FellowshipEventSerializer
)


@extend_schema(
    tags=['Fellowships'],
    summary='List & create fellowship events',
)
class FellowshipListCreateAPIView(
    generics.ListCreateAPIView
):
    queryset = FellowshipEvent.objects.all()

    serializer_class = (
        FellowshipEventSerializer
    )

    filterset_fields = [
        'month',
        'speaker_status',
        'worship_team_status',
    ]

    search_fields = [
        'theme',
        'speaker',
        'mc',
        'bible_verse',
    ]

    ordering_fields = [
        'date',
        'attendance_count',
        'created_at',
    ]

    ordering = ['-date']


@extend_schema(
    tags=['Fellowships'],
    summary='Retrieve/update/delete fellowship',
)
class FellowshipRetrieveUpdateDestroyAPIView(
    generics.RetrieveUpdateDestroyAPIView
):
    queryset = FellowshipEvent.objects.all()

    serializer_class = (
        FellowshipEventSerializer
    )