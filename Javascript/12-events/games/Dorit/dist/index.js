function createBalloon1() {
    var balloonId = uid1();
    document.body.innerHTML += "<img id=" + balloonId + " class=\"balloon\" src=\"https://freesvg.org/storage/img/thumb/rg1024-two-ballons.png\"/>";
    var balloon = document.querySelector("#" + balloonId);
    //moveBalloon1(balloon);
    //console.log("to move balloon")
    balloon.onclick = bombPicture;
    moveBalloon(balloon);
}
// const bombPicture = document.body.innerHTML = `<img src ="/bomb/istockphoto-114409917-170667a.jpg"/>`
function bombPicture(ev) {
    //console.log("we are here")
    bombImg = document.querySelector("#bombImg");
    myAudio.play();
    bombImg.style.height = "75px";
    bombImg.style.width = "75px";
    bombImg.style.position = "absolute";
    ev.target.style.top = "50vh";
    bombImg.style.left = ev.target.style.left;
    ev.target.style.opacity = "0";
    bombImg.style.opacity = "1";
    setTimeout(function () {
        bombImg.style.opacity = "0";
    }, 200);
}
function moveBalloon1(balloon) {
    balloon.style.top = '90vh';
    balloon.style.left = Math.random() * 90 + "vw";
    balloon.onclick = bombPicture;
    setTimeout(function () {
        balloon.style.top = '-12vh';
    }, 100);
}
function uid1() {
    return "id-" + Math.ceil(Math.random() * 1e8);
}
var myAudio = new Audio('./bomb/mixkit-bomb-explosion-in-battle-2800.wav');
document.body.innerHTML += "<img id =\"bombImg\" src=\"./bomb/istockphoto-114409917-170667a.jpg\"/>";
var bombImg = document.querySelector("#bombImg");
bombImg.style.opacity = "0";
var randomNumber = Math.floor(Math.random() * 2000) + 3000;
setInterval(function () {
    createBalloon1();
}, randomNumber);
