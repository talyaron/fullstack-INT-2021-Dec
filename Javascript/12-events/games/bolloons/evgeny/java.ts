const balloons:any = document.querySelectorAll('.balloon')
// balloons.forEach(element => {
        
    
//     element.style.top = '112vh';
// });

 
function goingUp () {
    balloons.forEach(element => {
        
        element.style.left = `${getRandomNumber()}vw`;
        element.style.top = '0vh';
    });
}
function getRandomNumber (){
    let random = Math.floor(Math.random() * 90);
    return random
}

goingUp()

