const balloons:NodeListOf<HTMLImageElement>= document.querySelectorAll (".balloon")
console.dir(balloons)

moveBallons(balloons)

function moveBallons(){
    balloons.forEach(balloon => {
       moveBallons (balloon);
    });
}

