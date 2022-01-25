
# Project
from app import serializers
from app import models
from app import filters

# Django
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

# Python
import logging


logger = logging.getLogger('db')

## Direct Views

# Main Index View
def index(request):
    """So far this is the main django view."""
    context = {
        'component': 'App',
        'props': {
            'env': 'Django',
            'pages': models.Page.get_pages_as_dict(),
        },
        'title': '', # 'Django + React',
    }
    return render(request, 'index.html', context)


## API: Auto generated API Views

# Page API
class PageViewSet(viewsets.ModelViewSet):
    """API endpoint that allows pages to be viewed or edited."""
    queryset = models.Page.objects.all()
    serializer_class = serializers.PageSerializer
    search_fields = ["title", "url"]

# Image API
class ImageViewSet(viewsets.ModelViewSet):
    """API endpoint that allows images to be viewed or edited."""
    queryset = models.Image.objects.all()
    serializer_class = serializers.ImageSerializer

# File API
class FileViewSet(viewsets.ModelViewSet):
    """API endpoint that allows images to be viewed or edited."""
    queryset = models.File.objects.all()
    serializer_class = serializers.FileSerializer

# User API
class UserViewSet(viewsets.ModelViewSet):
    """API endpoint that allows users to be viewed or edited."""
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = serializers.UserSerializer


# ## 
# class TagViewSet(viewsets.ModelViewSet):
#     queryset = models.Tag.objects.all()
#     serializer_class = serializers.TagSerializer


# class PostViewSet(viewsets.ModelViewSet):
#     queryset = models.Post.objects.all()
#     serializer_class = serializers.PostSerializer
#     filterset_class = filters.PostFilter
#     search_fields = ["title", "teaser", "body"]


# class CommentViewSet(viewsets.ModelViewSet):
#     queryset = models.Comment.objects.all()
#     serializer_class = serializers.CommentSerializer
#     filterset_fields = ["post"]
#     search_fields = ["body"]


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = models.Author.objects.all()
#     serializer_class = serializers.AuthorSerializer
#     filterset_class = filters.UserFilterSet
#     search_fields = ["name"]
