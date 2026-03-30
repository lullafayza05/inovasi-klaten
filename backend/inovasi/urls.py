from django.urls import path
from .views import get_inovasi, create_inovasi

urlpatterns = [
    path('', get_inovasi),
    path('create/', create_inovasi),
]