var ballons = document.querySelectorAll(".ballons");
var boss = document.querySelectorAll(".boss");
//////////תעופה של בלונים ובלון בוס function of movement for the objects////////////
function ballonFly(ballons, hight) {
    // newBallon()
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
//function newBallon(){
//document.body.innerHTML += `<div class="ballons"><img src="imgs/PikPng.com_pink-balloon-png-transparent_5494729.png" id="ballon">`
//}
/////////////////////reset/////////////////////
function newBallon() {
    ballons.forEach(function (element) {
        element.style.top = 100 + "vh";
    });
}
function rungame() {
    newBallon();
    ballonFly(ballons, -14);
    ballonFly(boss, -34);
    console.log("test");
}
setInterval(newBallon, 2000);
setInterval(rungame, 5000);
