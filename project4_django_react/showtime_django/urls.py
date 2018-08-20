"""showtime_django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from django.conf.urls import include

#your login and logout routes.

urlpatterns = [
	path('admin/', admin.site.urls), #admin for your admin side of things
    path('api-auth/', include('rest_framework.urls',   namespace='rest_framework')), #the route for your api request. your requests will be localhost://8000/api-auth/...  maybe it's for your login/logout? 
    #react will use this route to talk to the database.
    path('', include('showtime.urls')) #this is where it goes for the urls.
]
