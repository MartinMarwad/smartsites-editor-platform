"""Website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
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

# Project
from app import views

# Django
from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.static import serve
from cra_helper.views import proxy_cra_requests
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from dynamic_preferences.api.viewsets import GlobalPreferencesViewSet
from dynamic_preferences.users.viewsets import UserPreferencesViewSet


# Django REST API URL Routes
router = routers.DefaultRouter()
router.register("pages", views.PageViewSet)
router.register("files", views.FileViewSet)
router.register("users", views.UserViewSet)
router.register("notifications", views.NotificationViewSet)
router.register('global', GlobalPreferencesViewSet, 'global')

# Create URLs for site
urlpatterns = [

    # Default index template to render index.html
    path('', views.index),

    # Django Admin
    path("django_admin/", admin.site.urls),

    # Django Rest Framework
    path('api/', include(router.urls)),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # re_path(r'^preferences/', include(router.urls, namespace='preferences')),

    # Whitenoise: Force Serve Media Files... This may be insecure: https://github.com/evansd/whitenoise/issues/62
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}), 

    # Django-CRA-Helper: Allow Django to rest of routes to client-side router
    re_path(r'^.*/$', views.index)

]

# Django-CRA-Helper: Add a reverse-proxy view to help React in the Django view talk to Create-React-App
#   - There are some /static/js/*.chunk.js files not getting loaded. This method fixes it, but
#   it only works because the default django development static server is replaced by whitenoise.
if settings.DEBUG:
    proxy_urls = [
        re_path(r'^__webpack_dev_server__/(?P<path>.*)$', proxy_cra_requests),
        re_path(r'^(?P<path>.+\.hot-update\.(js|json|js\.map))$', proxy_cra_requests),
        re_path(r'^sockjs-node/(?P<path>.*)$', proxy_cra_requests),
        re_path(r'^static/js/(?P<path>.*)$', proxy_cra_requests), # Only works when static file server is disabled
        re_path(r'^static/media/(?P<path>.*)$', proxy_cra_requests),
    ]
    urlpatterns.extend(proxy_urls)