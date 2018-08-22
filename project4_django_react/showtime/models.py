from django.db import models


#one to many.
class Artist(models.Model):
    artist_name = models.CharField(max_length=70)
    artist_age = models.CharField(max_length=20)
    artist_photo_url = models.TextField()

    def __str__(self):
        return str(self.artist_name)


#LOOK UP an actor and see what shows they've been in.
#user searches in CJ. goes in to the databse and finds all the instances of the primary key of CJ.

#debugging:

class Artwork(models.Model):

    artwork_title = models.CharField(max_length=100)
    artwork_photo_url = models.TextField()
    artwork_artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='artworks')

    def __str__(self):
        return str(self.artwork_title) #this needs to be what you show on the screen.


#ForeignKey: Shows is saying you can tie actors to shows. it's like when you included one schema inside another one.

#The related_name refers to how the model will be referred to in relation to its parent -- you will see this in use later on.

#on_delete specifies how we want the models to act when their parent is deleted. By using cascade, related children will be deleted.
