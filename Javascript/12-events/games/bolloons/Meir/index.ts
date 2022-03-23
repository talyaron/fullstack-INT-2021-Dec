const ballons:any = document.querySelectorAll("#ballon");

function flyBallon(){
    ballons.forEach(element => {
        element.style.top ='-16vh'
        element.style.left = `${getRandomPosition}vw`
    })
    
}



function getRandomPosition() {
    let random = Math.floor(Math.random()*100);
    return random;
}

flyBallon(ballons)
