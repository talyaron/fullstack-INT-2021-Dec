const balloons: any = document.querySelectorAll (".balloon");

function moveBalloons() {
    balloons.forEach(element => {
        element.style.top = `-25vh`;
        element.style.left = `${getRandom()}vw`;
        
    });
    
}

function getRandom(){
    let random = Math.floor(Math.random()*90);
    return random;
}

moveBalloons()