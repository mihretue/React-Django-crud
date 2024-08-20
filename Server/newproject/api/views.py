from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Book
from .serializers import BookSerializer

@api_view(['GET'])
def get_books(request):
    books = Book.objects.all()
    serializedBook = BookSerializer(books, many=True).data
    return Response(serializedBook)

@api_view(['POST'])
def create_book(request):
    data = request.data
    serialize = BookSerializer(data=data)
    if serialize.is_valid():
        serialize.save()
        return Response(serialize.data, status=status.HTTP_201_CREATED)
    return Response(serialize.errors,status=status.HTTP_400_BAD_REQUEST)
# Create your views here.
