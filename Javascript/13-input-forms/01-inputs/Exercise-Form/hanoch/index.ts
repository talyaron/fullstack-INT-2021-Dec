
const name1 = document.querySelector("#name")
const mail = document.querySelector("#mail")
const pass =document.querySelector("#pass")


function handleGetText(event){
    console.dir(event)
    let outputText:HTMLElement = document.querySelector(`#${event.target.name}`)
    const value = event.target.value 
    outputText.innerHTML = value
}