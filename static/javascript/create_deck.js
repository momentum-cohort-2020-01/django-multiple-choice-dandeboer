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
    .then(response => {
        // console.log(response)
        console.log("JsonResponse recieved")
        createButton()

    })
    .catch((error) => {
        console.error('JSON response ERROR')
    })
})

function createButton() {
    console.log("hi")

}