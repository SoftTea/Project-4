from django.contrib import admin
from .models import Artist, Artwork

# Register your models here.
admin.site.register(Artist)
admin.site.register(Artwork)

#note: you can't do (Actor, Show) in one line.
