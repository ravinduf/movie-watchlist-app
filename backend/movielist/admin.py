from django.contrib import admin
from .models import Movies
# Register your models here.

class MovieAdmin(admin.ModelAdmin):
    exclude = ['slug']
    fields = ('name', 'year_released', 'poster', 'watched')
    search_fields = ['name']

admin.site.register(Movies, MovieAdmin)