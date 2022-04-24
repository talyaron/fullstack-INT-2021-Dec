

let ul = document.querySelector(".agentList")

const chooseUrAgent = document.querySelector(".chooseUrAgent")

const jett = document.querySelector(".agentJett")

const neon = document.querySelector(".agentNeon")

const sage = document.querySelector(".agentSage")

const wrapper = document.querySelector(".profileWrapper")

const agentName = document.querySelector(".agentName")

const agentImg = document.querySelector(".agentImg")


function handleClick(ev) {
    if (ev.target.className == 'agentJett') {
        ul.remove()
        chooseUrAgent.remove()
        wrapper.style.display = 'block'
        agentName.innerHTML = 'Agent name: Jett'
        agentImg.src = 'images/jettProfile.png'
    } else if (ev.target.className == 'agentNeon') {
        ul.remove()
        chooseUrAgent.remove()
        wrapper.style.display = 'block'
        agentName.innerHTML = 'Agent name: Neon'
        agentImg.src = 'images/neonProfile.png'
    } else if (ev.target.className == 'agentSage') {
        ul.remove()
        chooseUrAgent.remove()
        wrapper.style.display = 'block'
        agentName.innerHTML = 'Agent name: Sage'
        agentImg.src = 'images/sageProfile.png'
    }
    console.log(ev.target.value)
}

