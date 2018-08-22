from rest_framework import serializers
from .models import Artist, Artwork

#This serializer allows us to specify model fields that we want to include in our API and it will generate our JSONs accordingly. It will also allow us to link from one model to another.

#The Meta class within our Artist serializer class specifies meta data about our serializer. In this class, the model it serializes and the fields we want to serialize. Also, songs is our HyperlinkedRelatedField, `


class ArtistSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
    	model = Artist
    	fields = ('id', 'artist_name', 'artist_age', 'artist_photo_url', 'artworks')

#shows might be referring to related names 'shows' in the model.

class ArtworkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Artwork
        fields = ('id', 'artwork_title', 'artwork_photo_url','artwork_artist')
