var ballons = document.querySelectorAll(".ballons");
var boss = document.querySelectorAll(".boss");
//////////תעופה של בלונים ובלון בוס function of movement for the objects////////////
function ballonFly(ballons) {
    ballons.forEach(function (element) {
        element.style.top = "-14vh";
        element.style.left = randomPosition() + "vw";
    });
}
function bossballonFly(boss) {
    boss.forEach(function (element) {
        element.style.top = "-35vh";
        element.style.left = randomPosition() + "vw";
    });
}
function randomPosition() {
    var postion;
    postion = Math.random() * 90;
    return postion;
}
ballonFly(ballons);
bossballonFly(boss);
//////////////////////////////////////////
