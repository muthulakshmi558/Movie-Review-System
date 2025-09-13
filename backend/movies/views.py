from rest_framework import viewsets, filters, pagination
from .models import Movie, Review, Genre
from .serializers import MovieSerializer, ReviewSerializer, GenreSerializer

class MoviePagination(pagination.LimitOffsetPagination):
    default_limit = 10
    max_limit = 50

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    pagination_class = MoviePagination
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'actors']
    ordering_fields = ['release_date', 'title']

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['movie__title', 'reviewer__username']
    ordering_fields = ['rating', 'date']

class GenreViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
