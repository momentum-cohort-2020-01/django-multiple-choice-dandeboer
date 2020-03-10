let deckButton = document.querySelector("#deck-button")

deckButton.addEventListener('click', removeInnards)

function removeInnards() {
    let buttonInnards = document.querySelectorAll("#button-innards")
    console.log("works")
    for (let innard of buttonInnards) {
        innard.remove()   
    }
    deckButton.removeEventListener('click', removeInnards)
    createDeck()
    //add form to submit ajax to the database
    //after submission add innerhtml again and eventlistener
}

function createDeck() {
    deckButton.innerHTML = "<p>Hello</p>"

}