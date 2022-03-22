const balloons:any= document.querySelectorAll (".balloon")


function amazingBallons(){
    balloons.forEach(element => {
        element.style.top= -30+"vh";
        element.style.left = `${getRandomPosition()}vw`;
    });
}


function getRandomPosition() {
    let randonsize = Math.floor(Math.random() * 100);
    return randonsize;
}

amazingBallons()

