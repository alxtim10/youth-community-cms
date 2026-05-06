from django.contrib import admin
from .models import FellowshipEvent


@admin.register(FellowshipEvent)
class FellowshipEventAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'date',
        'theme',
        'speaker',
        'speaker_status',
        'attendance_count',
    )

    search_fields = (
        'theme',
        'speaker',
        'mc',
    )

    list_filter = (
        'month',
        'speaker_status',
        'worship_team_status',
    )