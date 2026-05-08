# apps/files/urls.py

from django.urls import path

from .views import (
    FileListCreateAPIView,
    FileRetrieveUpdateDestroyAPIView,
)

urlpatterns = [
    path(
        '',
        FileListCreateAPIView.as_view(),
        name='file-list-create',
    ),

    path(
        '<int:pk>/',
        FileRetrieveUpdateDestroyAPIView.as_view(),
        name='file-detail',
    ),
]