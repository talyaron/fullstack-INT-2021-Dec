const balloons:any = document.querySelectorAll('.baloons')
function moveBalloons(){
balloons.forEach(elm =>{
    elm.style.top = "15vh"
    elm.style.left = `${getRandomNumber()}vw`
})
}function moveBalloons1(){
    balloons.forEach(elm =>{
        elm.style.top = "90vh"
        // elm.style.left = `${getRandomNumber()}vw`
    })
    }

// setInterval(moveBalloons(),500)
function getRandomNumber (){
    const random = Math.floor(Math.random() * 90);
    return random}
    function moveBalloons2(){
        moveBalloons();
        moveBalloons1();
    }
setInterval(moveBalloons,5000)
setInterval(moveBalloons1,5000)