from django.urls import path
from rest_framework import routers
from .api import WeatherViewSet, WeatherHistoryView

router = routers.DefaultRouter()
router.register('weather', WeatherViewSet, 'weather')

urlpatterns = [
    path('weather/history/', WeatherHistoryView.as_view(), name='weather-history'),
]

urlpatterns += router.urls
