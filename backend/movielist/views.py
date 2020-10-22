from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Movies
from .serializers import MoviesSerializer
# Create your views here.

class MovieListView(ListAPIView):
    queryset = Movies.objects.order_by('name')
    serializer_class = MoviesSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


