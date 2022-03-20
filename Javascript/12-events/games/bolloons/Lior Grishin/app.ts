console.log('connected!');
const body:HTMLBodyElement = document.querySelector('body');
const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll('.ballon');

body.style.backgroundImage = 'url(./images/Background.jpg)'

// Function :
// Setting Ballon position off-screen (bot) //
function setBallonDown(ballons:NodeListOf<HTMLImageElement>){
    ballons.forEach(element => {
        element.style.top = '100vh';
    });
}

// Function :
// Setting ballon off-screen (top)//
function setBallonUp(ballons:NodeListOf<HTMLImageElement>){
    ballons.forEach(element => {
        element.style.top= '-20vh';
    });
}

// Function:
// Setting ballon in random position on x axies
function setBallonRandomPosition(ballons:NodeListOf<HTMLImageElement>){
    ballons.forEach(element => {
        element.style.left = `${getRandomWidthStart()}px`;
    });
}

// Function:
// returns number between 0 - body's width
function getRandomWidthStart():number{
    return Math.random() * body.offsetWidth;
}