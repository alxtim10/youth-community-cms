from django.db import models


class FellowshipEvent(models.Model):
    STATUS_CHOICES = [
        ('DONE', 'Done'),
        ('NOT_DONE', 'Not Done'),
    ]

    month = models.CharField(max_length=50)

    date = models.DateField()

    theme = models.CharField(max_length=255)

    bible_verse = models.CharField(max_length=255)

    objective = models.TextField()

    theme_description = models.TextField()

    speaker = models.CharField(max_length=255)

    speaker_pic = models.CharField(max_length=255)

    speaker_status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='NOT_DONE',
    )

    mc = models.CharField(max_length=255)

    musician = models.CharField(max_length=255)

    worship_team_pic = models.CharField(
        max_length=255
    )

    worship_team_status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='NOT_DONE',
    )

    attendance_count = models.PositiveIntegerField(
        default=0
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return f"{self.theme} ({self.date})"