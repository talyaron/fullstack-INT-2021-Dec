let baloon = document.querySelector(".baloonImg")

const body = document.querySelector("body")

const wrapper = document.querySelector(".wrapper")

let counterDiv = document.querySelector(".counterDiv")

let storeText = document.querySelector(".storeText")

counterDiv.innerHTML = `baloons popped: 0`

function randomLeft() {
    let x = Math.round(Math.random() * 87) + `vw`
    return x
}


function moveBaloons(element) {
    element.style.left = randomLeft();
    setInterval(() => {
        element.style.top = '-25vh';
    }, 10)
}

function createNewBaloon() {
    const newBaloon = document.createElement("img")
    newBaloon.className = 'baloonImg';
    newBaloon.src = "baloon.png"
    wrapper.append(newBaloon)
    newBaloon.addEventListener("click", handleClick)
    moveBaloons(newBaloon)
    setInterval(() => {
        newBaloon.remove();
    }, 8000)
    console.dir(newBaloon)
    return newBaloon
}

let counter = 0;

function handleClick(ev) {
    let audio = new Audio('jettbye.mp3')
    audio.play()
    const baloonPosition = ev.target.getBoundingClientRect()
    const newBoom = document.createElement("img")
    ev.target.remove()
    newBoom.className = 'boomImg'
    newBoom.src = 'boom.png'
    //ev.target.style.width = '70px'
    //ev.target.style.height = '70px'
    //ev.target.style.transition = 'top 8s'
    //let evPosition = ev.target.getBoundingClientRect()
    newBoom.style.top = Math.round(baloonPosition.top) + `px`
    newBoom.style.left = Math.round(baloonPosition.left)+ `px`
    wrapper.append(newBoom)
    if(ev.isTrusted){
        counterDiv.innerHTML = `baloons popped ${++counter}`
    }
    console.log(counter)
    setInterval(() => {
        newBoom.remove()
    }, 500)
    console.dir(ev)
    //console.log(baloonPosition.top)
    //console.log(baloonPosition)
}

setInterval(createNewBaloon, 2000)

let store = document.createElement("div")
let storeH1 = document.createElement("h1")
storeH1.innerHTML = 'welcome to the store!'
store.className = 'store'



function handleStore(ev){
    const click = ev
    if(click.isTrusted == true){
        console.log('hi')
        body.append(store)
        store.append(storeH1)
        storeText.style.pointerEvents = "none";
    }
}