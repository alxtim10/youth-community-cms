from rest_framework import generics
from .models import Member
from .serializers import MemberSerializer

from drf_spectacular.utils import extend_schema
from apps.core.pagination import (
    StandardResultsPagination
)

@extend_schema(
    tags=['Members'],
    summary='List members & Create member',
)
# GET all members
# POST create member
class MemberListCreateAPIView(
    generics.ListCreateAPIView
):
    pagination_class = (
        StandardResultsPagination
    )
    queryset = Member.objects.all().order_by('name')

    serializer_class = MemberSerializer

    # exact filtering
    filterset_fields = [
        'gender',
    ]

    # search
    search_fields = [
        'name',
        'phone',
    ]

    # ordering
    ordering_fields = [
        'name',
        'created_at',
    ]

    ordering = ['name']


# GET detail member
# PUT update member
# PATCH partial update
# DELETE member
@extend_schema(
    tags=['Members'],
    summary='Member detail',
)
class MemberRetrieveUpdateDestroyAPIView(
    generics.RetrieveUpdateDestroyAPIView
):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer