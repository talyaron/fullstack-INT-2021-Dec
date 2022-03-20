var ballons = document.querySelectorAll(".ballons");
function ballonFly() {
    ballons.forEach(function (element) {
        element.innerHTML = " <div class=ballons>";
        element.style.visibility = "visible";
        element.style.top = randomPosition() + "vh";
    });
    function randomPosition() {
        var postion;
        postion = Math.random() * 90;
        return postion;
    }
    window.requestAnimationFrame(ballonFly);
    var intervalID = setInterval(ballonFly, 1000);
}
