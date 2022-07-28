
# Project
from app import models

# Django
from django.contrib import admin

## Register Django Admin Models

# Page 
@admin.register(models.Page)
class PageAdmin(admin.ModelAdmin):
    list_display  = ('id', 'title', 'url',)

# Image
# @admin.register(models.Image)
# class ImageAdmin(admin.ModelAdmin):
#     list_display  = ('id', 'name', 'alt', 'image')

# File
@admin.register(models.File)
class FileAdmin(admin.ModelAdmin):
    list_display  = ('id', 'name', 'description', 'file')


## Other
# @admin.register(models.Author)
# class Author(admin.ModelAdmin):
#     list_display  = ('name', 'email')

# @admin.register(models.Tag)
# class Tag(admin.ModelAdmin):
#     list_display  = ('name', 'parent', 'published')

# @admin.register(models.Post)
# class Post(admin.ModelAdmin):
#     list_display  = ('title', 'views', 'commentable', 'published_at', 'category', 'subcategory')

# @admin.register(models.Comment)
# class Comment(admin.ModelAdmin):
#     list_display  = ('post', 'body', 'created_at', 'author')