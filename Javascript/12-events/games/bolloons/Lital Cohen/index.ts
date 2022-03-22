const balloons:NodeListOf<HTMLImageElement> = document.querySelectorAll('.balloon')
console.dir(balloons)

moveBalloons(balloons)

function moveBalloons(balloons:NodeListOf<HTMLImageElement>){
    balloons.forEach(balloon=>{
        moveBalloon(balloon);
    })
}



function moveBalloon(balloon:HTMLImageElement){
   
    
    balloon.style.top = '112vh';
    balloon.style.left = `${Math.random()*90}vw`
    setInterval(()=>{
        balloon.style.top = '-12vh';
        
    },500)
}
