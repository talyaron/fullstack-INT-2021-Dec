console.log('connected!');
const body:HTMLBodyElement = document.querySelector('body');
const balloons = document.querySelectorAll('.balloon');

body.style.backgroundImage = 'url(./images/Background.jpg)'

// Function :
// Setting Ballon position off-screen (bot) //
function setBalloonDown(balloons:NodeListOf<HTMLImageElement>){
    balloons.forEach(element => {
        element.style.top = '100vh';
    });
}

// Function :
// Setting ballon off-screen (top)//
function setBalloonUp(balloons){
    balloons.forEach(element => {
        element.style.top= '-20vh';
    });
}

// Function:
// Setting ballon in random position on x axies
function setBalloonRandomPosition(balloons:NodeListOf<HTMLImageElement>){
    balloons.forEach(element => {
        element.style.left = `${getRandomWidthStart()}px`;
    });
}

// Function:
// returns number between 0 - body's width
function getRandomWidthStart():number{
    return Math.random() * body.offsetWidth;
}

body.addEventListener('click', ev =>{
    const mousePosition = [ev.clientX, ev.clientY];
    addBalloon(mousePosition)
})

function addBalloon (mousePosition) {
    const newBalloon = document.createElement('div')
    body.append(newBalloon)
    newBalloon.classList.add('balloon')
    newBalloon.style.left = `${mousePosition[0]}px`
    newBalloon.style.top = `${mousePosition[1]}px`
    const newBalloonImage = document.createElement('img')
    newBalloon.append(newBalloonImage)
    newBalloonImage.src = "images/balloon-blue.png"
    moveUp(newBalloon)
}

function moveUp(elm) {
    setTimeout(() => {
        elm.style.top= '-20vh';
    }, 1000);
}