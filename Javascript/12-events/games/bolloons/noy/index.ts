const balloons:any = document.querySelectorAll(".balloon");

function moveBalloon(){
    balloons.forEach(element => {
        element.style.top = '-15vh'
        element.style.left = `${getRandomPosition()}vw`
    })
}

setTimeout(moveBalloon);


// function that gets a random number for postion
function getRandomPosition() {
    let randonsize = Math.floor(Math.random() * 100);
    return randonsize;
}