from django.urls import path
from .views import get_pengaduan, create_pengaduan

urlpatterns = [
    path('', get_pengaduan),
    path('create/', create_pengaduan),
]