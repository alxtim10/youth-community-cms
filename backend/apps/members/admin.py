from django.contrib import admin
from .models import Member


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'address',
        'phone',
    )

    search_fields = (
        'name',
        'email',
    )