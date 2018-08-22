from django.urls import path
from . import views   #the . means any sibling (same-level) file.


#the path for all actors (or shows)  show the ActorList and called it actor-list. It will render it to the screen as  as_view. The name part I'm unsure of. I think it just names it.

#these are just routes for your fetch request to the server.
#api/actors/  will render the json text ActorList.as_view()

# http://localhost:8000/api/actors/ will show you all the actors.


urlpatterns = [
    path('api/artist/', views.ArtistList.as_view(), name='artist-list'),
    path('api/artist/<int:pk>', views.ArtistDetail.as_view(), name='artist-detail'),
    path('api/artwork/', views.ArtworkList.as_view(), name='artwork-list'),
    path('api/artwork/<int:pk>', views.ArtworkDetail.as_view(), name='artwork-detail'),
    path('artsy-access/', views.Artsy_access_key, name='Artsy_access_key'),
]
