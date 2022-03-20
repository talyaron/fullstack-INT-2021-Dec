const balloons:any = document.querySelectorAll('.balloon')


 
function goingUp (balloons) {
    balloons.forEach(element => {
        
        element.style.left = `${getRandomNumber()}vw`;
        element.style.top = '-12vh';
    });
}
function getRandomNumber (){
    let random = Math.floor(Math.random() * 90);
    return random}
goingUp(balloons)


