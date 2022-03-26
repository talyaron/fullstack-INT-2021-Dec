
const score :HTMLElement = document.querySelector('.score');
const timer:HTMLElement = document.querySelector('.timer')
let scoreCounter:number = 0;
let timerCounter:number = 0;
const audio = new Audio();
audio.src = './audio/Plop.ogg'

function createNewBaloon(){

    const arrDivs: Array<HTMLElement> = [];

    for(let i = 0; i  < 15; i++){
        const newBaloon :HTMLElement = document.createElement('div');
        newBaloon.classList.add('baloon');
        newBaloon.style.top = getRandomTop() + "px";
        newBaloon.style.left = getRandomLeft() + "px";
        document.body.appendChild(newBaloon);
        arrDivs.push(newBaloon)
    }
    setInterval(function(){
        arrDivs.forEach(e => {
            e.onclick = handleClick;
            let x = parseInt(e.style.top);
            if (x > -150){
                x -= 5;
                e.style.top = x + 'px';
            }
        })
    },50)
    
}

function handleClick(ev){
    audio.play();
    ev.target.style.display = 'none';
    scoreCounter += 1;
    score.innerHTML = `Score: ${scoreCounter}`; 
}

function getRandomTop():number{
    let a = Math.floor((Math.random() * 1000) + 1000)
    return a;
}

function getRandomLeft():number{
    let a = Math.floor(Math.random() * innerWidth - 100)
    if (a < 100){
        a += 100;
    }
    return a;
}
function timerFun(){
    timerCounter += 1;
    timer.innerHTML = `Time: ${timerCounter}`; 
    if(timerCounter === 20){
        clearInterval(baloonInter)
    }
    else if(timerCounter === 30){
        clearInterval(timeInter)
    }

}

createNewBaloon()
const baloonInter = setInterval(createNewBaloon,5000)
const timeInter = setInterval(timerFun,1000)
