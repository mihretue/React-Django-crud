from django.urls import path
from .views import get_books,create_book
urlpatterns = [
    path('book/', get_books, name='get_books' ),
    path('book/create/', create_book, name='create_book')
]
