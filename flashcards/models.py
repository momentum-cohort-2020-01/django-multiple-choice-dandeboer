from django.db import models
from users.models import User

class Deck(models.Model):
    title = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=200, null=True, blank=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='decks')
    # foreignkey cards
    # topics

class Card(models.Model):
    question = models.TextField(max_length=250)
    answer = models.TextField(max_length=250)
