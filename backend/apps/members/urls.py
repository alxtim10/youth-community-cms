from django.urls import path
from .views import (
    MemberListCreateAPIView,
    MemberRetrieveUpdateDestroyAPIView,
)

urlpatterns = [
    path(
        '',
        MemberListCreateAPIView.as_view(),
        name='member-list-create',
    ),

    path(
        '<int:pk>/',
        MemberRetrieveUpdateDestroyAPIView.as_view(),
        name='member-detail',
    ),
]