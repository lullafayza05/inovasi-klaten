from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Inovasi
from .serializers import InovasiSerializer


@api_view(['GET'])
def get_inovasi(request):
    data = Inovasi.objects.all()
    serializer = InovasiSerializer(data, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_inovasi(request):
    serializer = InovasiSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)