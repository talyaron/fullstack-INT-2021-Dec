
const number = document.querySelector("#phon")
const img = document.querySelector("#img")
console.dir(number)

function handleGetNumber(event){
    const value = event.target.value
    let outPut = document.querySelector(".phon")
    outPut.innerHTML = value

}

function handleGetImg(event){
    const value = event.target.value
    let outPut = document.querySelector(".img")
    outPut.innerHTML = `<img src="${value}">`
}
function handleGetIdentify(event){
    const value = event.value
    console.dir(value)
}

const nameIdentify =document.querySelector("#nameIdentify")
const passIdentify = document.querySelector("#passIdentify")
const name1 = document.querySelector("#name")
const pass = document.querySelector("#pass")

if (nameIdentify === name1 && passIdentify === pass){
    document.body.style.backgroundColor = "red";
}