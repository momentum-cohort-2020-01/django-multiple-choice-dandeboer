let deckButton = document.querySelector("#deck-button")
let deckButtonForm = document.querySelector("#deck-button-form")

deckButton.addEventListener('click', createDeck)

//add form to submit ajax to the database
//after submission add innerhtml again and eventlistener
function createDeck() {
    deckButton.removeEventListener('click', createDeck)
    deckButton.innerHTML = "<p>Hello</p>"
}

deckButtonForm.addEventListener('submit', e => {
    e.preventDefault()
    let deckTitle = document.querySelector("#deck-title")
    let deckDescription = document.querySelector("#deck-description")
    let data = {title: deckTitle.value, description: deckDescription.value}
    console.log(data)
    fetch('http://127.0.0.1:8000/deck/add/', {
        method: 'POST',
        headers: {'Content-type': 'application/json',},
        body: JSON.stringify(data)
    })
    // .then((response) => response.json())
})