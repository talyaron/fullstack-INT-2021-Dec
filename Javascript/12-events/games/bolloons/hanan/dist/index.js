var ballons = document.querySelectorAll(".ballons");
var boss = document.querySelectorAll(".boss");
//////////תעופה של בלונים ובלון בוס function of movement for the objects////////////
function ballonFly(ballons, hight) {
    ballons.forEach(function (element) {
        element.style.top = hight + "vh";
        element.style.left = randomPosition() + "vw";
    });
}
function randomPosition() {
    var postion;
    postion = Math.random() * 90;
    return postion;
}
ballonFly(ballons, -14);
ballonFly(boss, -34);
/////////////////////reset/////////////////////
