from django.db import models
from django.utils import timezone

def current_time():
    return timezone.now().time()

class Weather(models.Model):
    city = models.CharField(max_length=200)
    degree = models.IntegerField(null=False)
    condition = models.CharField(max_length=40)
    time = models.TimeField(default=current_time)  
