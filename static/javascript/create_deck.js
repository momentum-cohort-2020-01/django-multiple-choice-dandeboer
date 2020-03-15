let deckButtonForm = document.querySelector("#deck-button-form")
let addCard = document.querySelector("#add-card")

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
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        window.pk = data.pk
        console.log("JsonResponse recieved")
        createButton()
    })
    .catch((error) => {
        console.error('JSON response ERROR')
    })
})

function createButton() {
    console.log("hi")
    addCard.classList.remove("hidden")
    addCard.setAttribute("class", "add-button")
    let cardButton = document.querySelector("#add-card-button")
    cardButton.setAttribute("type", "submit")
}

addCard.addEventListener('submit', e => {
    e.preventDefault()
    let questionInput = document.querySelector("#question-input")
    let answerInput = document.querySelector("#answer-input")
    let data = {pk: window.pk, question: questionInput.value, answer: answerInput.value}
    console.log(data)
    fetch('http://127.0.0.1:8000/deck/card/', {
        method: 'POST',
        headers: {'Content-type': 'application.json',},
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(response => {
        console.log('Other JsonResponse recieved')
        console.log(response)
    })
    .catch((error) => {
        console.error('Other JSON response ERROR')
    })
})