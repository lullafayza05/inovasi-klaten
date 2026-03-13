from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Inovasi

@api_view(['GET'])
def get_inovasi(request):
    data = Inovasi.objects.all().values()
    return Response(list(data))