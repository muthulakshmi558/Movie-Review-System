from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import MovieViewSet, ReviewViewSet, GenreViewSet

router = DefaultRouter()
router.register(r'movies', MovieViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'genres', GenreViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
