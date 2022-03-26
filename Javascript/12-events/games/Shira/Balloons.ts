

const balloons: NodeListOf<HTMLImageElement> = document.querySelectorAll('.balloon')
const body: HTMLBodyElement = document.querySelector('body');

body.style.backgroundImage = 'url(./images/nature.jpg)'


// Function that create div with balloon picture:
function createBalloon(): any {
    const newBalloon = document.createElement('div')
    body.append(newBalloon)
    newBalloon.classList.add('balloon')
    const balloonImg = document.createElement('img')
    newBalloon.append(balloonImg)
    balloonImg.src = "images/blueBalloon.png"
    newBalloon.addEventListener('click',handleClick)
    return newBalloon
}

// Function that changes the position of the balloons - from its position to the top of the screen, until it disappears:
function balloonUp(Balloon, interval: number) {
    Balloon.style.left = getRandomPosition() + 'vw';
    setInterval(() => {
        Balloon.style.top = '-25vh';
    }, interval)
}

// Function that get random start position:
function getRandomPosition(): number {
    let random = Math.floor(Math.random() * 50);
    return random
}

// Function that get random time that new balloons created in screen and start go up:
function getRandomInterval(): number {
    let random = Math.floor(Math.random() * 10000);
    console.log(`${random / 1000}s`)
    return random
}

//Function that explode the balloon and makes an exploding sound
function handleClick(ev){
    ev as HTMLElement;
    var audio = new Audio(`ballon-blows-up.wav`,);
    audio.play();
    ev.target.src = 'Images/explodBalloon.jpg'
}

// var counterVal = 0;

// function countClick() {
//     handleClick(++counterVal);
//     console.log(counterVal)
//     return handleClick
// }

// Start game function , create balloon that start go up after 5 seconds :
function startGame() {
    balloons.forEach(balloon => {
        balloonUp(createBalloon(), 5000)
    })
    balloonUp(createBalloon(), getRandomInterval())
}

// Time to start a new game:
setInterval(startGame, 2000)



