from django.urls import path
from .views import *

urlpatterns = [
    path('', MovieListView.as_view())
]
