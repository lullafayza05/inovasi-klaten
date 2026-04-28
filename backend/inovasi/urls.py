from django.urls import path
from .views import get_inovasi, create_inovasi, profile, register

urlpatterns = [
    path('', get_inovasi),
    path('create/', create_inovasi),
    path('profile/', profile), 
    path('register/', register),  # 🔥 TAMBAH INI
]