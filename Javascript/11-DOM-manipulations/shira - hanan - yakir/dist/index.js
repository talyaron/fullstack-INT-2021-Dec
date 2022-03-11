var ugiCron = document.querySelectorAll(".corona");
function coronaMove() {
    ugiCron.forEach(function (element) {
        element.style.top = randomPosition() + "vh";
        element.style.left = randomPosition() + "vw";
    });
    // debugger
    overLapCheck();
}
console.log(ugiCron);
function randomPosition() {
    var postion;
    postion = Math.random() * 100;
    return postion;
}
var intervalID = setInterval(coronaMove, 2000);
function overLapCheck() {
    for (var i = 0; i < ugiCron.length; i++) {
        for (var j = i + 1; j < ugiCron.length; j++) {
            if (!(ugiCron[i].getBoundingClientRect().top >
                ugiCron[j].getBoundingClientRect().bottom ||
                ugiCron[i].getBoundingClientRect().right <
                    ugiCron[j].getBoundingClientRect().left ||
                ugiCron[i].getBoundingClientRect().bottom <
                    ugiCron[j].getBoundingClientRect().top ||
                ugiCron[i].getBoundingClientRect().left >
                    ugiCron[j].getBoundingClientRect().right) && i != j) {
                console.log("covid Collision id " + i + " and " + j);
                ugiCron[i].style.visibility = "hidden";
                ugiCron[j].style.visibility = "hidden";
            }
        }
    }
}
