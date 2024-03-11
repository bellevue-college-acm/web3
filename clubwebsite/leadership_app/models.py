from django.db import models

class ClubLeadership(models.Model):
    full_name = models.CharField(max_length=200)
    position = models.CharField(max_length=100)
    email = models.EmailField()
    profile_picture = models.ImageField(upload_to='leadership/')

    class Meta:
        verbose_name_plural = "Club Leadership"
