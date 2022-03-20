var ballons = popsiPop < HTMLElement > document.querySelector(".ballons");
function ballonFly() {
    ballons.forEach(function (element) {
        element.innerHTML = "<img id='ballon' src=\"imgs/ooo.jpg";
        alt = ;
        "\">";
        element.style.visibility = "visible";
        element.style.top = randomPosition() + "vh";
    });
}
