const balloons:any = document.querySelectorAll('.baloons')
function moveBalloons(){
balloons.forEach(elm =>{
    elm.style.top = "-15vh"
    elm.style.left = `${getRandomNumber()}vw`
})
}
// setInterval(moveBalloons(),500)
function getRandomNumber (){
    const random = Math.floor(Math.random() * 90);
    return random}
setInterval(moveBalloons,6000)