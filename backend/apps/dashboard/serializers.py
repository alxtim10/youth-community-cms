from rest_framework import serializers

from apps.fellowship.models import (
    FellowshipEvent
)


class SimpleFellowshipSerializer(
    serializers.ModelSerializer
):
    class Meta:
        model = FellowshipEvent

        fields = [
            'id',
            'date',
            'theme',
            'speaker',
            'attendance_count',
        ]