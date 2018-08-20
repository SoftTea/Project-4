from django.contrib import admin
from .models import Actor, Show

# Register your models here.
admin.site.register(Actor)
admin.site.register(Show)

#note: you can't do (Actor, Show) in one line.
