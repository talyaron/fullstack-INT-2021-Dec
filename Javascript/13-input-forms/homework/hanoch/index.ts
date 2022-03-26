
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