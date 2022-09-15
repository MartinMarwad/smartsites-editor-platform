# Django Dynamic Preferences: https://github.com/agateblue/django-dynamic-preferences

# Django
from dynamic_preferences.types import BooleanPreference, StringPreference
from dynamic_preferences.preferences import Section
from dynamic_preferences.registries import global_preferences_registry
from dynamic_preferences.users.registries import user_preferences_registry


## SECTIONS: Create Section objects to link related preferences together

general = Section('general')

## GLOBAL SETTINGS

# Website Name
@global_preferences_registry.register
class WebsiteName(StringPreference):
    section = general
    name = 'website_name'
    default = 'My Website'
    required = False
    
# Favicon
@global_preferences_registry.register
class Favicon(StringPreference):
    section = general
    name = 'favicon'
    default = 'My Website'
    required = False

# USER SETTINGS
# @user_preferences_registry.register
# class CommentNotificationsEnabled(BooleanPreference):
#     """Do you want to be notified on comment publication ?"""
#     section = discussion
#     name = 'comment_notifications_enabled'
#     default = True
