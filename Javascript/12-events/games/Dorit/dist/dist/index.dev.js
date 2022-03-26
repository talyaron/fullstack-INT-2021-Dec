"use strict";

// function createBalloon(){
//     const balloonId = uid();
//     document.body.innerHTML += `<img id='${balloonId}' class='balloon' src="https://freesvg.org/storage/img/thumb/rg1024-two-ballons.png" />`
//     const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
//     moveBalloon(balloon);
// }
function moveBalloon(balloon) {
  //console.log("move balloon")
  balloon.style.top = '100vh';
  balloon.style.left = Math.random() * 90 + "vw";
  body.addEventListener('click', bombPicture);
  setTimeout(function () {
    //balloon.style.top = '-12vh';
    balloon.style.top = -1 * body.offsetHeight + "px";
  }, 5000);
} //setInterval(createBalloon,5000)


function uid() {
  return "id-" + Math.ceil(Math.random() * 1e8);
}

function createBalloon1() {
  var balloonId = uid1(); //document.body.innerHTML += "<img id=" + balloonId + " class=\"balloon\" src=\"https://freesvg.org/storage/img/thumb/rg1024-two-ballons.png\"/>";

  document.body.innerHTML += "<img id = ".concat(balloonId, " class = \"balloon\" src = \"img/balloon-blue.png\"/>"); //var balloon = document.querySelector("#" + balloonId);

  var balloon = document.querySelector("#".concat(balloonId)); //moveBalloon1(balloon);
  //console.log("to move balloon")

  body.addEventListener("click", bombPicture);
  moveBalloon(balloon);
} // body.addEventListener('click', function (event:any){
// if(event.target.nodeName === 'IMG'){
//     popSound.play();
//     pointsCounter++;
//     event.target.remove();
// }
// })


function bombPicture(ev) {
  console.dir(ev);

  if (ev.target.nodeName === 'IMG') {
    bombImg = document.querySelector("#bombImg");
    myAudio.play();
    bombImg.style.opacity = "1";
    console.log(" opacity of bomb img " + bombImg.style.opacity);
    bombImg.style.position = "absolute";
    bombImg.style.height = "75px";
    bombImg.style.width = "75px";
    ev.target.remove();
    ev.target.style.top = "50vh";
    bombImg.style.left = ev.target.style.left;
    bombImg.style.top = ev.target.style.top;
    ev.target.style.opacity = "0";
    setTimeout(function () {
      bombImg.style.opacity = "0";
    }, 1000);
  } //console.log("bomb")
  //bombImg = document.querySelector("#bombImg"); 
  // bombImg.style.opacity="1"
  // console.dir(bombImg)
  // console.log(`opacity of bomb image ${bombImg.style.opacity}`)
  // myAudio. play();
  // bombImg.style.position="absolute"
  // bombImg.style.left = ev.target.style.left
  // bombImg.style.top = "50vh"
  // ev.target.opacity="0"
  // ev.target.remove()
  // //ev.target.style.opacity="0"
  // setTimeout(()=>{
  //     bombImg.style.opacity = "0"
  // },2000)

}

function uid1() {
  return "id-" + Math.ceil(Math.random() * 1e8);
}

var myAudio = new Audio('./img/mixkit-bomb-explosion-in-battle-2800.wav');
document.body.innerHTML += "<img id =\"bombImg\" width=\"75px\" height=\"75px\" src=\"./img/istockphoto-114409917-170667a.jpg\"/>";
var bombImg = document.querySelector("#bombImg");
bombImg.style.position = "absolute"; // bombImg.style.top = "100px"
// bombImg.style.left = "50vh"

bombImg.style.opacity = "0";
var randomNumber = Math.floor(Math.random() * 2000) + 7000;
var body = document.querySelector('body');
body.style.backgroundImage = "url('./img/skyies.jpg')";
setInterval(function () {
  createBalloon1();
}, randomNumber);