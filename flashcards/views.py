from django.shortcuts import render
from django.http import HttpResponse
from .models import Deck, Card

def home(request):
    decks = Deck.objects.all()
    return render(request, 'flashcards/index.html', {'decks': decks})
