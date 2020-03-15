from django.shortcuts import render, redirect
from .models import Deck, Card
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

def home(request):
    decks = request.user.decks.all()
    return render(request, 'flashcards/index.html', {'decks': decks})

@login_required
def deck_page(request):
    deck = request.user.decks.all()
    return render(request, 'flashcards/deck-page.html', {'deck': deck})

@csrf_exempt
def add_deck(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode("utf-8"))
        title = data.get('title')
        description = data.get('description')
        new_deck, created = request.user.decks.get_or_create(title=title, description=description)
        return JsonResponse({'pk': new_deck.pk, 'title': title, 'description': description}, safe=False)

@csrf_exempt
def add_card(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        question = data.get('question')
        answer = data.get("answer")
        deck_pk = data.get("pk")
        current_deck = Deck.objects.get(pk=deck_pk)
        new_card = current_deck.cards.create(question=question, answer=answer)
        return JsonResponse({'question': question, 'answer': answer, 'current-deck': current_deck.cards}, safe=False)

