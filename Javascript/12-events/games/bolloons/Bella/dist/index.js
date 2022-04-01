// const getRandom = (min:number, max:number) => Math.floor(Math.random()*(max-min+1)+min);
var balloons = document.querySelectorAll('.baloonns');
var container = document.querySelector('.container');
var i = 0;
for (i; i < 4; i++) {
    var balloons_1 = document.createElement('img');
    balloons_1.src = "./balloons.png";
    balloons_1.width = 200;
    container.appendChild(balloons_1);
}
function moveBalloons() {
    balloons.forEach(function (element) {
        element.style.top = "-12vh";
        element.style.left = getRandom() + "vw";
    });
}
function getRandom() {
    var random = Math.floor(Math.random() * 100);
    return random;
}
moveBalloons();
setInterval(moveBalloons, 1000);
// create balloon
// -> move balloon
// in random times....
// const balloons:NodeListOf<HTMLImageElement> = document.querySelectorAll('.balloon')
// console.dir(balloons)
// function createBalloon(){
//     const balloonId = uid();
//     document.body.innerHTML += `<img id='${balloonId}' class='balloon' src="./dist/balloons.png"/>`
//     const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
//     moveBalloon(balloon);
// }
// function moveBalloon(balloon:HTMLImageElement){
//     balloon.style.top = '112vh';
//     balloon.style.left = `${Math.random()*90}vw`
//     setTimeout(()=>{
//         balloon.style.top = '-12vh';
//     },100)
// }
// setInterval(createBalloon,1000)
// function uid(){
//     return `id-${Math.ceil(Math.random()*1e8)}`
// }
