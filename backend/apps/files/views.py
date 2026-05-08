
from rest_framework import generics

from drf_spectacular.utils import extend_schema

from .models import File
from .serializers import FileSerializer


@extend_schema(tags=['Files'])
class FileListCreateAPIView(
    generics.ListCreateAPIView
):
    queryset = File.objects.all().order_by('-created_at')

    serializer_class = FileSerializer

    search_fields = [
        'name',
        'description',
    ]


@extend_schema(tags=['Files'])
class FileRetrieveUpdateDestroyAPIView(
    generics.RetrieveUpdateDestroyAPIView
):
    queryset = File.objects.all()

    serializer_class = FileSerializer