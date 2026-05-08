# apps/files/serializers.py

from rest_framework import serializers
from .models import File


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File

        fields = [
            'id',
            'name',
            'url',
            'description',
            'created_at',
        ]

        read_only_fields = [
            'id',
            'created_at',
        ]