var meteors = document.querySelectorAll('.meteor');
var spaceship = document.querySelector('#spaceShip');
var body = document.querySelector('body');
var wrapper = document.querySelector('.wrapper');
// function gets meteors and returns each meteor position
function getMeteorPosition(meteors) {
    var ourMeteors = [];
    meteors.forEach(function (element) {
        var meteor = {
            leftPosition: element.getBoundingClientRect().left,
            rightPosition: element.getBoundingClientRect().right,
            topPosition: element.getBoundingClientRect().top,
            bottomPosition: element.getBoundingClientRect().bottom
        };
        ourMeteors.push(meteor);
    });
    return ourMeteors;
}
// function moves meteors individually
function moveMeteors() {
    setInterval(checkCollision, 100);
    var bodyWidth = document.body.offsetWidth;
    var bodyHeight = document.body.offsetHeight;
    meteors.forEach(function (element) {
        element.style.top = getRandomNumber(bodyHeight) + "px";
        element.style.left = getRandomNumber(bodyWidth) + "px";
    });
}
function checkCollision() {
    // Check if meteor[i] collid meteor[i+1]
    var meteorPosition = getMeteorPosition(meteors);
    var isExpolded = false;
    for (var i = 0; i < meteorPosition.length; i++) {
        var _loop_1 = function (j) {
            if (!meteors[i].classList.contains("hidden")) {
                if (i === j) {
                    return "break";
                }
                else if (typeof i === 'undefined') {
                    return "break";
                }
                else if (meteorPosition[i].leftPosition >= meteorPosition[j].leftPosition &&
                    meteorPosition[i].leftPosition <= meteorPosition[j].rightPosition) {
                    if (meteorPosition[i].topPosition >= meteorPosition[j].topPosition &&
                        meteorPosition[i].topPosition <= meteorPosition[j].bottomPosition) {
                        // Add Explostion and Remove divs
                        console.log(i + " and " + j + " Are overlapping at X and Y");
                        if (!isExpolded) {
                            isExpolded = true;
                            var explosionPositionTop = (meteorPosition[i].topPosition + meteorPosition[j].topPosition) / 2;
                            var explosionPositionLeft = (meteorPosition[i].leftPosition + meteorPosition[j].leftPosition) / 2;
                            var newExplostion_1 = document.createElement('img');
                            newExplostion_1.classList.add('explostion');
                            newExplostion_1.src = "images/explosion-transparent-png-picture-1.png";
                            newExplostion_1.style.top = explosionPositionTop + "px";
                            newExplostion_1.style.left = explosionPositionLeft + "px";
                            wrapper.appendChild(newExplostion_1);
                            setTimeout(function () {
                                newExplostion_1.remove();
                                isExpolded = false;
                            }, 100);
                            meteors[i].classList.add("hidden");
                            meteors[j].classList.add("hidden");
                        }
                    }
                    else if (meteorPosition[i].bottomPosition >= meteorPosition[j].topPosition &&
                        meteorPosition[i].bottomPosition <= meteorPosition[j].bottomPosition) {
                        // Add Explostion and Remove divs
                        console.log(i + " and " + j + " Are overlapping at X and Y");
                        if (!isExpolded) {
                            isExpolded = true;
                            var explosionPositionTop = (meteorPosition[i].topPosition + meteorPosition[j].topPosition) / 2;
                            var explosionPositionLeft = (meteorPosition[i].leftPosition + meteorPosition[j].leftPosition) / 2;
                            var newExplostion_2 = document.createElement('img');
                            newExplostion_2.classList.add('explostion');
                            newExplostion_2.src = "images/explosion-transparent-png-picture-1.png";
                            newExplostion_2.style.top = explosionPositionTop + "px";
                            newExplostion_2.style.left = explosionPositionLeft + "px";
                            wrapper.appendChild(newExplostion_2);
                            setTimeout(function () {
                                newExplostion_2.remove();
                                isExpolded = false;
                            }, 100);
                            meteors[i].classList.add("hidden");
                            meteors[j].classList.add("hidden");
                        }
                    }
                }
                else if (meteorPosition[i].rightPosition >= meteorPosition[j].leftPosition &&
                    meteorPosition[i].rightPosition <= meteorPosition[j].rightPosition) {
                    if (meteorPosition[i].bottomPosition >= meteorPosition[j].topPosition &&
                        meteorPosition[i].bottomPosition <= meteorPosition[j].bottomPosition) {
                        // Add Explostion and Remove divs
                        console.log(i + " and " + j + " Are overlapping at X and Y");
                        if (!isExpolded) {
                            isExpolded = true;
                            var explosionPositionTop = (meteorPosition[i].topPosition + meteorPosition[j].topPosition) / 2;
                            var explosionPositionLeft = (meteorPosition[i].leftPosition + meteorPosition[j].leftPosition) / 2;
                            var newExplostion_3 = document.createElement('img');
                            newExplostion_3.classList.add('explostion');
                            newExplostion_3.src = "images/explosion-transparent-png-picture-1.png";
                            newExplostion_3.style.top = explosionPositionTop + "px";
                            newExplostion_3.style.left = explosionPositionLeft + "px";
                            wrapper.appendChild(newExplostion_3);
                            setTimeout(function () {
                                newExplostion_3.remove();
                                isExpolded = false;
                            }, 100);
                            meteors[i].classList.add("hidden");
                            meteors[j].classList.add("hidden");
                        }
                    }
                    else if (meteorPosition[i].topPosition >= meteorPosition[j].topPosition &&
                        meteorPosition[i].topPosition <= meteorPosition[j].bottomPosition) {
                        // Add Explostion and Remove divs
                        console.log(i + " and " + j + " Are overlapping at X and Y");
                        if (!isExpolded) {
                            isExpolded = true;
                            var explosionPositionTop = (meteorPosition[i].topPosition + meteorPosition[j].topPosition) / 2;
                            var explosionPositionLeft = (meteorPosition[i].leftPosition + meteorPosition[j].leftPosition) / 2;
                            var newExplostion_4 = document.createElement('img');
                            newExplostion_4.classList.add('explostion');
                            newExplostion_4.src = "images/explosion-transparent-png-picture-1.png";
                            newExplostion_4.style.top = explosionPositionTop + "px";
                            newExplostion_4.style.left = explosionPositionLeft + "px";
                            wrapper.appendChild(newExplostion_4);
                            setTimeout(function () {
                                newExplostion_4.remove();
                                isExpolded = false;
                            }, 100);
                            meteors[i].classList.add("hidden");
                            meteors[j].classList.add("hidden");
                        }
                    }
                }
                else {
                    console.log('no overlap');
                }
            }
        };
        for (var j = 1; j < meteorPosition.length; j++) {
            var state_1 = _loop_1(j);
            if (state_1 === "break")
                break;
        }
    }
}
// Function getting random number to set width and height of meteor postion top,left
function getRandomNumber(max) {
    var randNumber = Math.floor(Math.random() * max);
    if (randNumber > 100) {
        randNumber -= 100;
    }
    return randNumber;
}
// Function sets random rotate for each meteor
function setRandomRotate() {
    meteors.forEach(function (element) {
        var randomRotate = Math.floor(Math.random() * 360);
        element.style.transform = "rotate(" + randomRotate + "deg)";
    });
}
body.addEventListener('mousemove', function (ev) {
    var middleElementX = ev.clientX - (spaceship.offsetWidth) / 2;
    var middleElementY = ev.clientY - (spaceship.offsetHeight) / 2 + 50;
    spaceship.style.top = middleElementY + "px";
    spaceship.style.left = middleElementX + "px";
});
moveMeteors();
setTimeout(moveMeteors, 500);
setRandomRotate();
setInterval(moveMeteors, 5000);
