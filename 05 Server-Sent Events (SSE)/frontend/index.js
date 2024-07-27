const h1 = document.querySelector("h1")
const body = document.querySelector("body")
const timeEventSource = new EventSource("http://localhost:3001/currentTime")


// timeEventSource.onmessage = (Event) => {
//     console.log(Event)
//     h1.innerText = Event.data
// }


timeEventSource.addEventListener("date", (Event) => {
    console.log(Event)
    h1.innerText = Event.data
})

timeEventSource.addEventListener("color", (Event) => {
    console.log(Event)
    body.style.backgroundColor = Event.data
})