var ballons = document.querySelectorAll(".ballons");
function ballonFly(ballons) {
    ballons.forEach(function (element) {
        element.style.top = "-12vh";
        element.style.left = randomPosition() + "vw";
    });
    function randomPosition() {
        var postion;
        postion = Math.random() * 90;
        return postion;
    }
}
ballonFly(ballons);
