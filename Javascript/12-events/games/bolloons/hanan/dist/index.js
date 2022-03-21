var ballons = document.querySelectorAll(".ballons");
var boss = document.querySelectorAll(".boss");
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
    function bossballonFly(boss) {
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
}
ballonFly(ballons);
ballonFly(boss);
