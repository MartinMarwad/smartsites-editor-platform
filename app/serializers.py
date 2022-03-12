
# Project
from app import models
from app import filters

# Django
from django.contrib.auth.models import User, Group
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from django_db_logger.models import StatusLog

# Python
import json


## Django REST API Serializers

# Page Serializer
class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Page
        fields = ("id", "title", "url", "content",)

# Image Serializer
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = ("id", "name", "alt", "image",)

# File Serializer
class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.File
        fields = ("id", "name", "description", "file",)

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_staff', 'is_active', 'last_login', ]
        
# Notification Serializer
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusLog
        fields = ['id', 'logger_name', 'level', 'msg', 'trace', 'create_datetime', ]


## Other

# class TagSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tag
#         fields = ("id", "name", "parent", "published")


# class AuthorSerializer(serializers.ModelSerializer):
#     model = Author

#     class Meta:
#         model = Author
#         fields = ("id", "name", "email")


# class CommentSerializer(serializers.ModelSerializer):
#     author = AuthorSerializer(many=False)

#     class Meta:
#         model = Comment
#         fields = ("id", "post", "body", "created_at", "author")

#     def create(self, validated_data):
#         author_data = validated_data.pop("author")
#         author = Author.objects.create(**author_data)
#         comment = Comment.objects.create(author=author, **validated_data)
#         return comment

#     def update(self, instance, validated_data):
#         update_instance(instance.author, validated_data.pop("author"))
#         update_instance(instance, validated_data)
#         return instance


# class TagRelatedField(serializers.PrimaryKeyRelatedField):
#     def get_queryset(self):
#         return super().get_queryset()


# class PostSerializer(serializers.ModelSerializer):
#     tags = TagRelatedField(many=True, queryset=Tag.objects.all(), required=False)
#     backlinks = serializers.JSONField(required=False)
#     notifications = serializers.JSONField(required=False)
#     authors = serializers.JSONField(required=False)

#     class Meta:
#         model = Post
#         fields = (
#             "id",
#             "title",
#             "teaser",
#             "body",
#             "views",
#             "average_note",
#             "commentable",
#             "published_at",
#             "category",
#             "subcategory",
#             "tags",
#             "backlinks",
#             "notifications",
#             "authors",
#         )
