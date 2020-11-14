from rest_framework import serializers
from .models import Movies

class MoviesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movies
        exclude = ['slug',]
        lookup_field = 'slug'