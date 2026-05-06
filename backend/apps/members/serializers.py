from rest_framework import serializers
from .models import Member


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = [
            'id',
            'name',
            'address',
            'gender',
            'phone',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']

    def validate_email(self, value):
        if Member.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                "Email already exists."
            )

        return value