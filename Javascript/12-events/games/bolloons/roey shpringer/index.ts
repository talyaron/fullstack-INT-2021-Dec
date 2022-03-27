let baloon = document.querySelector(".baloonImg")

const wrapper = document.querySelector(".wrapper")

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
        counter++
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