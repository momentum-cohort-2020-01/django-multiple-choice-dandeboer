let deckButton = document.querySelector("#deck-button")

deckButton.addEventListener('click', createDeck)

function createDeck() {
    location.href = 'http://127.0.0.1:8000/deck/'
}