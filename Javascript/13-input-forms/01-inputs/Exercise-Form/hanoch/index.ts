
const name1 = document.querySelector("#name")
const mail = document.querySelector("#mail")
const pass =document.querySelector("#pass")


function handleGetName(event){
    console.dir(event)
    body.innerHTML = event.target.value 
}