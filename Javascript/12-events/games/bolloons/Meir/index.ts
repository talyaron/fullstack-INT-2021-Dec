const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll("#ballon");
console.dir(ballons);

///////// Function create ballon
function createBalloon(){
    const balloonId = uid();
    document.body.innerHTML += `<img id='${balloonId}' class="balloon" src="balloons.png"/>`
    const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
    moveBalloon(balloon);
    balloonId.addEventListener('click',handleClick)
    return balloonId
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

///////// Function explote ballons
function handleClick(ev) {
    ev as HTMLElement;
    let audio = new Audio(`poomballon.wav`,);
    audio.play();
    ev.target.src='bombPicture.png'
}
// ballons.forEach((box:any)=>{
    
//     box.onclick = exploteBalloon;
    
//     function exploteBalloon() {
//         const balloonId = uid();
//         document.body.innerHTML += `<img id='${balloonId}' class="balloon" src="bombPicture.png"/>`
//         const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
//         let audio = new Audio("poomballon.wav");
//         audio.play();
//     }
// })
  






