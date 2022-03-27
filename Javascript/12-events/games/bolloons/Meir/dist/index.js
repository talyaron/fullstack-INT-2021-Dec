var ballons = document.querySelectorAll(".balloon");
console.dir(ballons);
///////// Function create ballon
function createBalloon() {
    var balloonId = document.createElement('div');
    body.append(balloonId);
    balloonId.classList.add('balloon');
    var balloonImg = document.createElement('img');
    balloonId.append(balloonImg);
    balloonImg.src = "ballons.png";
    balloonId.addEventListener('click', handleClick);
    return balloonId;
    moveBalloon(balloon);
}
//////// Function move baloon ramdomly
function moveBalloon(balloon, interval) {
    //// balloon.style.top = '110vh';
    //// balloon.style.left = `${Math.random()*90}vw`
    balloon.style.left = getRandomPosition() + 'vw';
    setTimeout(function () {
        balloon.style.top = '-25vh';
    }, interval);
}
// Function that get random start position:
function getRandomPosition() {
    var random = Math.floor(Math.random() * 50);
    return random;
}
// ////function uid(){
//     return `id-${Math.ceil(Math.random()*1e8)}`
// }
// Function that get random time that new balloons created in screen and start go up:
function getRandomInterval() {
    var random = Math.floor(Math.random() * 10000);
    console.log(random / 1000 + "s");
    return random;
}
///////// Function explote ballons
function handleClick(ev) {
    ev;
    var audio = new Audio("poomballon.wav");
    audio.play();
    ev.target.src = 'bombPicture.png';
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
    balloons.forEach(function (balloon) {
        moveBalloon(createBalloon(), 5000);
    });
    moveBalloon(createBalloon(), getRandomInterval());
}
// Time to start a new game:
setInterval(startGame, 2000);
