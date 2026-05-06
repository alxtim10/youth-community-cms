from rest_framework import serializers
from .models import FellowshipEvent


class FellowshipEventSerializer(
    serializers.ModelSerializer
):
    class Meta:
        model = FellowshipEvent

        fields = '__all__'

        read_only_fields = [
            'id',
            'created_at',
            'updated_at',
        ]