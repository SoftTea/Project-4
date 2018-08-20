from rest_framework import serializers
from .models import Actor, Show

#This serializer allows us to specify model fields that we want to include in our API and it will generate our JSONs accordingly. It will also allow us to link from one model to another.

#The Meta class within our Artist serializer class specifies meta data about our serializer. In this class, the model it serializes and the fields we want to serialize. Also, songs is our HyperlinkedRelatedField, `


class ActorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
    	model = Actor
    	fields = ('id', 'actor_name', 'actor_age', 'actor_photo_url', 'shows')

#shows might be referring to related names 'shows' in the model.

class ShowSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Show
        fields = ('id', 'show_title', 'show_photo_url','show_actor')
