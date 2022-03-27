const Url = document.querySelector("#img")

function handleUrl(event){
    const value = event.target.value
    let outPut = document.querySelector(".img")
    outPut.innerHTML = `<img src="${value}">`
}