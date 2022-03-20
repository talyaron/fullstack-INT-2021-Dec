var meteaor = document.querySelectorAll(".boom-boi");
var test = document.querySelector('#test');
var image = document.querySelector("#image");
// console.dir(meteaor)
console.dir(test);
function createNewPosition() {
    meteaor.forEach(function (a) {
        a.style.top = getRandomNumber() + "vh";
        a.style.left = getRandomNumber() + "vw";
    });
}
function getRandomNumber() {
    var random = Math.floor(Math.random() * 90);
    return random;
}
setInterval(createNewPosition, 2000);
createNewPosition();
// const elm2p ={leftPosition:meteaor.getBoundingClientRect().x}
// console.log(elm2p)
for (var i = 0; i < meteaor.length; i++) {
    var elm1p = {
        leftPosition: meteaor[0].getBoundingClientRect().x,
        rightPosition: meteaor[0].getBoundingClientRect().right,
        topPosition: meteaor[0].getBoundingClientRect().y,
        bottomPosition: meteaor[0].getBoundingClientRect().bottom
    };
    var elm2p = {
        leftPosition: meteaor[1].getBoundingClientRect().x,
        rightPosition: meteaor[1].getBoundingClientRect().right,
        topPosition: meteaor[1].getBoundingClientRect().y,
        bottomPosition: meteaor[1].getBoundingClientRect().bottom
    };
    if (elm2p.topPosition > elm1p.topPosition &&
        elm1p.leftPosition > elm2p.leftPosition &&
        elm1p.leftPosition < elm2p.rightPosition &&
        elm1p.topPosition > elm2p.topPosition ||
        elm2p.topPosition < elm1p.bottomPosition &&
            elm2p.leftPosition > elm1p.leftPosition &&
            elm2p.leftPosition < elm1p.rightPosition &&
            elm1p.topPosition < elm2p.bottomPosition) {
        console.log('Overlap');
    }
    else {
        console.log('no Overlap');
    }
}
meteaor.forEach(function (box) {
    box.onmousedown = redisappear;
    box.onmouseup = disappear;
});
function disappear(id) {
    id.target.style.opacity = "0";
}
function redisappear() {
    document.getElementById("image").src = "boom.jpg";
    var audio = new Audio("boom-sound.wav");
    audio.play();
}
