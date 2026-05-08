
from django.db import models


class File(models.Model):
    name = models.CharField(max_length=255)

    url = models.URLField()

    description = models.TextField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name