console.log('connected!');
const body:HTMLBodyElement = document.querySelector('body');
const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll('.ballon');

body.style.backgroundImage = 'url(./images/Background.jpg)'

function moveBallonDown(ballons:NodeListOf<HTMLImageElement>){
    ballons.forEach(element => {
        element.style.top = '100vh';
    });
}

function moveBallonUp(ballons:NodeListOf<HTMLImageElement>){
    ballons.forEach(element => {
        element.style.top= '0vh';
    });
}