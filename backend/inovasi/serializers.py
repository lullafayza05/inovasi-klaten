from rest_framework import serializers
from .models import Inovasi

class InovasiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inovasi
        fields = '__all__'