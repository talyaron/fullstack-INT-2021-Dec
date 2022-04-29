

let ul = document.querySelector(".agentList")

const chooseUrAgent = document.querySelector(".chooseUrAgent")

const jett = document.querySelector(".agentJett")

const neon = document.querySelector(".agentNeon")

const sage = document.querySelector(".agentSage")

const profileWrapper = document.querySelector(".profileWrapper")

const agentName = document.querySelector(".agentName")

const agentImg = document.querySelector(".agentImg")

const gameWrapper = document.querySelector(".gameWrapper")

const line = document.querySelector(".line")

const startButton = document.querySelector(".startButton")


function handleClick(ev) {
    if (ev.target.className == 'agentJett') {
        ul.remove()
        chooseUrAgent.remove()
        profileWrapper.style.display = 'block'
        gameWrapper.style.display = 'block'
        agentName.innerHTML = 'Agent name: Jett'
        agentImg.src = 'images/jettProfile.png'
    } else if (ev.target.className == 'agentNeon') {
        ul.remove()
        chooseUrAgent.remove()
        profileWrapper.style.display = 'block'
        gameWrapper.style.display = 'block'
        agentName.innerHTML = 'Agent name: Neon'
        agentImg.src = 'images/neonProfile.png'
    } else if (ev.target.className == 'agentSage') {
        ul.remove()
        chooseUrAgent.remove()
        profileWrapper.style.display = 'block'
        gameWrapper.style.display = 'block'
        agentName.innerHTML = 'Agent name: Sage'
        agentImg.src = 'images/sageProfile.png'
    }
    console.log(ev.target.value)
}

function handleStart(ev) {
    startButton.innerHTML = `<div><button onclick="handlePause(event)" class="pauseButton"">Pause</button></div>`
    console.log(ev);
    let linePosition = line.getBoundingClientRect()
    console.log(linePosition)
    line.style.left = `99.30%`
}

function handlePause(ev){
    console.log(line.getBoundingClientRect().left)
    line.style.left = line.getBoundingClientRect().left
}

const pauseButton = document.querySelector(".pauseButton")

function newInterval(func, time) {
    return setInterval(func, time)
}

function moveRight() {
    line.style.left = `0%`
}
