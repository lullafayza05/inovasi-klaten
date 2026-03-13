from django.urls import path
from .views import get_inovasi

urlpatterns = [
    path('inovasi/', get_inovasi),
]