const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll("#ballon");
console.dir(ballons);

///////// Function create ballon
function createBalloon(){
    const balloonId = uid();
    document.body.innerHTML += `<img id='${balloonId}' class="balloon" src="balloons.png"/>`
    const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
    moveBalloon(balloon);
    
}

//////// Function move baloon ramdomly
function moveBalloon(balloon:HTMLImageElement){
    balloon.style.top = '110vh';
    balloon.style.left = `${Math.random()*90}vw`
   
    setTimeout(()=>{
        balloon.style.top = '-15vh'
    },100)
    
}

setInterval(createBalloon,4000)

function uid(){
    return `id-${Math.ceil(Math.random()*1e8)}`
}

ballons.forEach((box:any)=>{
    
    box.onclick = exploteBalloon;
    
    function exploteBalloon() {
        document.getElementById("image").src="bombPicture.png";
        let audio = new Audio("poomballon.wav");
        audio.play();
    }
})
  






