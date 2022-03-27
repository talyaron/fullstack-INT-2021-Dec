const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll(".balloon");
console.dir(ballons);

///////// Function create ballon
function createBalloon(): any{
    const balloonId = document.createElement('div')
    body.append(balloonId)
    balloonId.classList.add('balloon')
    const balloonImg = document.createElement('img')
    balloonId.append(balloonImg)
    balloonImg.src = "ballons.png"
    balloonId.addEventListener('click',handleClick)
    return balloonId
    moveBalloon(balloon)
}

//////// Function move baloon ramdomly
function moveBalloon(balloon, interval: number){
    //// balloon.style.top = '110vh';
    //// balloon.style.left = `${Math.random()*90}vw`
    balloon.style.left = getRandomPosition() + 'vw';
   
    setTimeout(()=>{
        balloon.style.top = '-25vh'
    }, interval)
    
}
// Function that get random start position:
function getRandomPosition(): number {
    let random = Math.floor(Math.random() * 50);
    return random
}

// ////function uid(){
//     return `id-${Math.ceil(Math.random()*1e8)}`
// }

// Function that get random time that new balloons created in screen and start go up:
function getRandomInterval(): number {
    let random = Math.floor(Math.random() * 10000);
    console.log(`${random / 1000}s`)
    return random
}

///////// Function explote ballons
function handleClick(ev) {
    ev as HTMLElement;
    let audio = new Audio(`poomballon.wav`,);
    audio.play();
    ev.target.src='bombPicture.png'
}
////// ballons.forEach((box:any)=>{
    
//     box.onclick = exploteBalloon;
    
//     function exploteBalloon() {
//         const balloonId = uid();
//         document.body.innerHTML += `<img id='${balloonId}' class="balloon" src="bombPicture.png"/>`
//         const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
//         let audio = new Audio("poomballon.wav");
//         audio.play();
//     }
// })

// Start game function , create balloon that start go up after 5 seconds :
function startGame() {
    balloons.forEach(balloon => {
        moveBalloon(createBalloon(), 5000)
    })
    moveBalloon(createBalloon(), getRandomInterval())
}

// Time to start a new game:
setInterval(startGame, 2000)


  






