from django.shortcuts import render, redirect
from .models import Deck, Card
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse

def home(request):
    decks = Deck.objects.all()
    return render(request, 'flashcards/index.html', {'decks': decks})

def deck_page(request):
    return render(request, 'flashcards/deck-page.html')

@csrf_exempt
def add_deck(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode("utf-8"))
        title = data.get('title')
        description = data.get('description')
        new_deck = Deck.objects.get_or_create(title=title, description=description)
        print(new_deck)
    return JsonResponse({'status': 'ok'})
