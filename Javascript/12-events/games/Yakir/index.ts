const balloons: NodeListOf<HTMLImageElement> = document.querySelectorAll('.balloon')
const body: HTMLBodyElement = document.querySelector('body');
const userScore: HTMLBodyElement = document.querySelector('#userScore');
let countUserScore:number = 0

// New Baloon element
function createBalloon(): any {
    const newBalloon = document.createElement('div')
    body.append(newBalloon)
    newBalloon.classList.add('balloon')
    const balloonImg = document.createElement('img')
    newBalloon.append(balloonImg)
    balloonImg.src = "./img/redBaloon.png"
    newBalloon.addEventListener('click',handleClick)
    return newBalloon
}


// baloon explosion + count player score
// game time is 30sec each game
function handleClick(ev){
    ev as HTMLElement;
    ev.target.src = './img/explosion.png'
    var audio = new Audio(`./audio/explosion.wav`,);
    audio.play();
    countUserScore++;

    //update the score after each explosion on screen and on console log
    console.log(`user Score is ${countUserScore}`)
    userScore.innerHTML = `User Score is: ${countUserScore}`;
}

// random Time for Crate Baloons
function getRandomInterval(): number {
    let random = Math.floor(Math.random() * 10000);
    return random
}

// random start position:
function getRandomPosition(): number {
    let random = Math.floor(Math.random() * 50);
    return random
}

// balloonUP
function balloonUp(Balloon, interval: number) {
    Balloon.style.left = getRandomPosition() + 'vw';
    setInterval(() => {
        Balloon.style.top = '-25vh';
    }, interval)
}

function gameOver(){
    const finalScore: number = 0+countUserScore
    document.querySelector('#gameOver').innerHTML = `Game Over user final Scor is ${finalScore},
    <br> you can keep play or refresh for new game`
}


// Start game function , create balloon that start go up in random times and every 5 sec :
function startGame() {
    balloonUp(createBalloon(), 5000) // every 5 sec
    balloonUp(createBalloon(), getRandomInterval()) // random time
    balloonUp(createBalloon(), getRandomInterval()) // random time
    setTimeout(() => {
        gameOver()
    }, 5000);
}

// Time to start a new game:
setInterval(startGame, 1000)