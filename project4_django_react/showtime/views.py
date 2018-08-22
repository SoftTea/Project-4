from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from rest_framework import generics
from .serializers import ArtistSerializer, ArtworkSerializer
#need to import model names to be able to serialize your routes.
from .models import Artist, Artwork
import requests
from django.conf import settings





class ArtistList(generics.ListCreateAPIView):
    #creates list view and create view for the API
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class ArtistDetail(generics.RetrieveUpdateDestroyAPIView):
    #creates show, update, and delete routes for our API.
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer



class ArtworkList(generics.ListCreateAPIView):
  queryset = Artwork.objects.all().prefetch_related('artwork_artist')
  serializer_class = ArtworkSerializer

class ArtworkDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Artwork.objects.all().prefetch_related('artwork_artist')
  serializer_class = ArtworkSerializer


def Artsy_access_key(request):
    headers= {'client_id': settings.ARTSY_APP_ID, 'client_secret': settings.ARTSY_SECRET}
    r = requests.post('https://api.artsy.net/api/tokens/xapp_token', data=headers)
    
    return JsonResponse(r.json())