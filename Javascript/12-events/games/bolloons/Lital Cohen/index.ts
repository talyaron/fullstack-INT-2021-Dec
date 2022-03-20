const balloons:NodeListOf<HTMLImageElement> =document.querySelectorAll('.balloon')

balloonsMoveUp(balloons);

function balloonsMoveUp(balloons:NodeListOf<HTMLImageElement>){
    balloons.forEach(balloon=>{
        balloonsMoveUp(balloons);
    })
}

function moveBalloon(balloon:HTMLImageElement){
   
    
    balloon.style.top = '112vh';
    balloon.style.left = `${Math.random()*90}vw`
    setInterval(()=>{
        balloon.style.top = '-12vh';
        
    },500)
}
