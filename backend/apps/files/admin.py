# apps/files/admin.py

from django.contrib import admin
from .models import File


@admin.register(File)
class FileAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'url',
        'created_at',
    )

    search_fields = (
        'name',
        'description',
    )