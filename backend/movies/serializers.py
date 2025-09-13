from rest_framework import serializers
from .models import Movie, Review, Genre

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"

class MovieSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=True, read_only=True)
    
    class Meta:
        model = Movie
        fields = "__all__"

class ReviewSerializer(serializers.ModelSerializer):
    reviewer = serializers.StringRelatedField()
    
    class Meta:
        model = Review
        fields = "__all__"
