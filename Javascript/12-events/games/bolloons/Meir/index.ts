const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll("#ballon");
console.dir(ballons);

///////// Function create ballon
function createBalloon(){
    const balloonId = uid();
    document.body.innerHTML += `<img id=${balloonId} 'class="ballon" src="ballon.svg.png"'/>`
    const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
    moveBalloon(balloon);
    
}

//////// Function move baloon
function moveBalloon(balloon:HTMLImageElement){
    balloon.style.top = '115vh';
    balloon.style.left = `${Math.random()*90}vw`
   
    setTimeout(()=>{
        balloon.style.top = '-15vh'
    },100)
}

setInterval(createBalloon,4000)

function uid(){
    return `id-${Math.ceil(Math.random()*1e8)}`
}



