from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User  # 🔥 WAJIB ADA

from .models import Inovasi
from .serializers import InovasiSerializer


# 🔥 PROFILE (untuk ambil role)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile(request):
    user = request.user
    return Response({
        "username": user.username,
        "is_staff": user.is_staff
    })


# 🔥 REGISTER
@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # validasi sederhana
    if not username or not password:
        return Response({"error": "Username & password wajib diisi"})

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username sudah digunakan"})

    # buat user (default = user biasa)
    user = User.objects.create_user(
        username=username,
        password=password
    )

    return Response({"message": "Register berhasil"})


# GET DATA
@api_view(['GET'])
def get_inovasi(request):
    data = Inovasi.objects.all()
    serializer = InovasiSerializer(data, many=True)
    return Response(serializer.data)


# CREATE DATA
@api_view(['POST'])
def create_inovasi(request):
    serializer = InovasiSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)