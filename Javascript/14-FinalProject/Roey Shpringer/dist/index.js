var ul = document.querySelector(".agentList");
var chooseUrAgent = document.querySelector(".chooseUrAgent");
var jett = document.querySelector(".agentJett");
var neon = document.querySelector(".agentNeon");
var sage = document.querySelector(".agentSage");
var profileWrapper = document.querySelector(".profileWrapper");
var agentName = document.querySelector(".agentName");
var agentImg = document.querySelector(".agentImg");
var gameWrapper = document.querySelector(".gameWrapper");
var line = document.querySelector(".line");
var startButton = document.querySelector(".startButton");
function handleClick(ev) {
    if (ev.target.className == 'agentJett') {
        ul.remove();
        chooseUrAgent.remove();
        profileWrapper.style.display = 'block';
        gameWrapper.style.display = 'block';
        agentName.innerHTML = 'Agent name: Jett';
        agentImg.src = 'images/jettProfile.png';
    }
    else if (ev.target.className == 'agentNeon') {
        ul.remove();
        chooseUrAgent.remove();
        profileWrapper.style.display = 'block';
        gameWrapper.style.display = 'block';
        agentName.innerHTML = 'Agent name: Neon';
        agentImg.src = 'images/neonProfile.png';
    }
    else if (ev.target.className == 'agentSage') {
        ul.remove();
        chooseUrAgent.remove();
        profileWrapper.style.display = 'block';
        gameWrapper.style.display = 'block';
        agentName.innerHTML = 'Agent name: Sage';
        agentImg.src = 'images/sageProfile.png';
    }
    console.log(ev.target.value);
}
function handleStart(ev) {
    startButton.innerHTML = "<div><button onclick=\"handlePause(event) class =\"pauseButton\"\">Pause</button></div>";
    console.log(ev);
    var linePosition = line.getBoundingClientRect();
    console.log(linePosition);
    line.style.left = "99.30%";
    newInterval(moveRight, 8000);
}
var pauseButton = document.querySelector(".pauseButton");
function newInterval(func, time) {
    return setInterval(func, time);
}
function moveRight() {
    line.style.left = "0%";
}
