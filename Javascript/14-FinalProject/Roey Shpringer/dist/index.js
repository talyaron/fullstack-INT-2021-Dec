var ul = document.querySelector(".agentList");
var chooseUrAgent = document.querySelector(".chooseUrAgent");
var jett = document.querySelector(".agentJett");
var neon = document.querySelector(".agentNeon");
var sage = document.querySelector(".agentSage");
var wrapper = document.querySelector(".profileWrapper");
var agentName = document.querySelector(".agentName");
var agentImg = document.querySelector(".agentImg");
function handleClick(ev) {
    if (ev.target.className == 'agentJett') {
        ul.remove();
        chooseUrAgent.remove();
        wrapper.style.display = 'block';
        agentName.innerHTML = 'Agent name: Jett';
        agentImg.src = 'images/jettProfile.png';
    }
    else if (ev.target.className == 'agentNeon') {
        ul.remove();
        chooseUrAgent.remove();
        wrapper.style.display = 'block';
        agentName.innerHTML = 'Agent name: Neon';
        agentImg.src = 'images/neonProfile.png';
    }
    else if (ev.target.className == 'agentSage') {
        ul.remove();
        chooseUrAgent.remove();
        wrapper.style.display = 'block';
        agentName.innerHTML = 'Agent name: Sage';
        agentImg.src = 'images/sageProfile.png';
    }
    console.log(ev.target.value);
}
