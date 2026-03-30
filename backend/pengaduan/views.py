from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Pengaduan
from .serializers import PengaduanSerializer

@api_view(['GET'])
def get_pengaduan(request):
    data = Pengaduan.objects.all()
    serializer = PengaduanSerializer(data, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_pengaduan(request):
    serializer = PengaduanSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)