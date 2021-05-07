from django.db.models.query import QuerySet
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, UpdateAPIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.core.files import File
import os
from pathlib import Path
import urllib
from .models import Movies
from .serializers import MoviesSerializer, MovieUpdateDeleteSerializer
from rest_framework import viewsets
from tempfile import NamedTemporaryFile


# Create your views here.
BASE_DIR = Path(__file__).resolve().parent.parent


class MovieListView(ListAPIView):
  serializer_class = MoviesSerializer
  lookup_field = 'slug'

  def get_queryset(self):
      user = self.request.user
      return Movies.objects.filter(user = user)

  # def perform_update(self, serializer_class):

    
class MovieUpdateView(UpdateAPIView):
  serializer_class = MovieUpdateDeleteSerializer
  lookup_field = 'pk'
  queryset = Movies.objects.all() 


class MoviePostView(APIView):
  serializer_class = MoviesSerializer
  permissions_classes = (permissions.AllowAny, )
  parser_classes = (MultiPartParser, FormParser)

  def post(self, request, *args, **kwargs):
      print(self.request.user.pk)
      filename = request.data['name'] + '.jpg'
      result = urllib.request.urlretrieve(request.data['poster'], filename)
      data = {'user': self.request.user.pk ,'name': request.data['name'], 'year_released': request.data['year_released'], 'poster' : File(open(filename, 'rb'))}
      movie_serializer = MoviesSerializer(data=data)

      if movie_serializer.is_valid():
          movie_serializer.save()
          os.remove(BASE_DIR / filename)
          return Response(movie_serializer.data, status=status.HTTP_201_CREATED)

      else:
          print('error', movie_serializer.errors)
          return Response(movie_serializer.errors, status=status.HTTP_400_BAD_REQUEST)