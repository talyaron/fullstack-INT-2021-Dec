var balloons = document.querySelectorAll('.balloon');
function moveBalloons() {
    balloons.forEach(function (Element) {
        Element.style.top = "112vh";
        Element.style.left = "Math.floor(Math.random() * 100)+wh";
        setInterval(function () {
            balloons.style.top = '-12vh';
        }, 500);
    });
}
moveBalloons();
