var body = document.querySelector('body');
var rapper = document.querySelector('.rapper');
var player = document.querySelector('.player');
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function createStep() {
    var step = document.createElement('div');
    step.classList.add('step');
    var stepWidth = getRandomArbitrary(10, 45);
    step.style.width = stepWidth + "vw";
    var leftPlace = getRandomArbitrary(1, 100);
    if (leftPlace > 60) {
        leftPlace = leftPlace - stepWidth;
    }
    if (stepWidth < 20) {
        var steptwo_1 = document.createElement('div');
        steptwo_1.classList.add('step');
        var stepWidthTwo = getRandomArbitrary(10, 20);
        steptwo_1.style.width = stepWidthTwo + "vw";
        var leftPlaceTwo = getRandomArbitrary(1, 100);
        if (leftPlace > 50) {
            leftPlaceTwo = leftPlace - 48;
        }
        else {
            leftPlaceTwo = leftPlace + 48;
        }
        steptwo_1.style.left = leftPlaceTwo + "vw";
        steptwo_1.style.transition = "all 50s";
        rapper.appendChild(steptwo_1);
        console.log(steptwo_1);
        var _loop_1 = function (i) {
            setTimeout(function () {
                steptwo_1.style.top = i * 5 + "vh";
            }, 2000);
        };
        for (var i = 0; i < 200; i++) {
            _loop_1(i);
        }
    }
    step.style.left = leftPlace + "vw";
    step.style.transition = "all 50s";
    rapper.appendChild(step);
    var _loop_2 = function (i) {
        setTimeout(function () {
            step.style.top = i * 5 + "vh";
        }, 2000);
    };
    for (var i = 0; i < 200; i++) {
        _loop_2(i);
    }
}
function handleClick(ev) {
    player.style.left = ev.x + "px";
    player.style.top = ev.y + "px";
}
rapper.addEventListener("click", handleClick);
setInterval(createStep, 2000);
