

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-one')
const message2 = document.querySelector('#message-two')

message1.textContent = "From js"

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    message1.textContent = "Loading..."
    message2.textContent = ""

    fetch('/weather?address=' + location).then((res) => {
        res.json().then((parsedData) => {
            if (parsedData.error) {
                message1.textContent = parsedData.error
            }
            else {
                message1.textContent = parsedData.location
                message2.textContent = parsedData.forecast
            }
        })
    })
})