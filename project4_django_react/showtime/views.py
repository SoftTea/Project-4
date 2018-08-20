from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from rest_framework import generics
from .serializers import ActorSerializer, ShowSerializer
#need to import model names to be able to serialize your routes.
from .models import Actor, Show
import requests
from django.conf import settings





class ActorList(generics.ListCreateAPIView):
    #creates list view and create view for the API
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer

class ActorDetail(generics.RetrieveUpdateDestroyAPIView):
    #creates show, update, and delete routes for our API.
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer



class ShowList(generics.ListCreateAPIView):
  queryset = Show.objects.all().prefetch_related('show_actor')
  serializer_class = ShowSerializer

class ShowDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Show.objects.all().prefetch_related('show_actor')
  serializer_class = ShowSerializer


def Artsy_test(request):
    headers= {'client_id': settings.ARTSY_APP_ID, 'client_secret': settings.ARTSY_SECRET}
    r = requests.post('https://api.artsy.net/api/tokens/xapp_token', data=headers)
    
    return JsonResponse(r.json())