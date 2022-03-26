const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll("#ballon");
console.dir(ballons);

///////////Function move objects
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

flyBallon()
setInterval(flyBallon,1000)
