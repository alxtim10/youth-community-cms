from django.urls import path

from .views import (
    FellowshipListCreateAPIView,
    FellowshipRetrieveUpdateDestroyAPIView,
)

urlpatterns = [
    path(
        '',
        FellowshipListCreateAPIView.as_view(),
        name='fellowship-list-create',
    ),

    path(
        '<int:pk>/',
        FellowshipRetrieveUpdateDestroyAPIView.as_view(),
        name='fellowship-detail',
    ),
]