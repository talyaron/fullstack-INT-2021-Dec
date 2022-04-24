var body = document.querySelector('body');
var rapper = document.querySelector('.rapper');
var player = document.querySelector('.player');
var floor = document.querySelector('.floor');
var allSteps = [];
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
    // if(stepWidth <20){
    //     const steptwo = document.createElement('div')
    //     steptwo.classList.add('step') 
    //     const stepWidthTwo = getRandomArbitrary(10, 20)
    //     steptwo.style.width = `${stepWidthTwo}vw`
    //     let leftPlaceTwo = getRandomArbitrary(1,100)
    //     if(leftPlace > 50)
    //     {
    //         leftPlaceTwo = leftPlace - 48
    //     }
    //     else{
    //         leftPlaceTwo = leftPlace + 48
    //     }
    //     steptwo.style.left = `${leftPlaceTwo}vw`
    //     allSteps.push(steptwo)
    //     steptwo.style.transition = `all 60s`
    //     rapper.appendChild(steptwo)
    //     for (let i=0; i<200; i++){
    //         setTimeout(() => {
    //             steptwo.style.top = `${i*5}vh`
    //         }, 2000)
    //     }
    // }
    step.style.left = leftPlace + "vw";
    allSteps.push(step);
    step.style.transition = "all 60s";
    rapper.appendChild(step);
    var _loop_1 = function (i) {
        setTimeout(function () {
            step.style.top = i * 5 + "vh";
        }, 2000);
    };
    for (var i = 0; i < 200; i++) {
        _loop_1(i);
    }
}
function handleClick(ev) {
    player.style.transition = "all 800ms";
    player.style.left = ev.x + "px";
    player.style.top = ev.y + "px";
    var loc = player.getBoundingClientRect();
    setTimeout(function () {
        for (var i = 0; i < 150; i++) {
            player.style.transition = "all 25s";
            player.style.top = loc.top - 2 + "vh";
        }
    }, 500);
}
rapper.addEventListener("click", handleClick);
function checkForHeadBump() {
    player.style.transition = "all 800ms";
    var loc = player.getBoundingClientRect();
    for (var i = 0; i < allSteps.length; i++) {
        var stepHeight = allSteps[i].getBoundingClientRect();
        var floorPlace = floor.getBoundingClientRect();
        if (stepHeight.top + 50 > floorPlace.top) {
            allSteps.shift();
        }
        if (stepHeight.top + 50 > loc.top) {
            if (((stepHeight.left <= loc.left) && (loc.left <= stepHeight.right)) ||
                ((stepHeight.left - 70 <= loc.left) && (loc.left <= stepHeight.right))) {
                for (var i_1 = 0; i_1 < 150; i_1++) {
                    player.style.top = loc.top - 2 + "vh";
                }
            }
        }
    }
}
setInterval(createStep, 3000);
setInterval(checkForHeadBump, 200);
