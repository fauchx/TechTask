from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Weather
from .serializers import WeatherSerializer


class WeatherViewSet(viewsets.ModelViewSet):
    queryset = Weather.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = WeatherSerializer


class WeatherHistoryView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        weather_history = Weather.objects.all()  
        serializer = WeatherSerializer(weather_history, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
