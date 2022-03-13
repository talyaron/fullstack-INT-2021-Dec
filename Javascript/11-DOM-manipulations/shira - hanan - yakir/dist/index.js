// ugiCorn is the element for the game
var ugiCron = document.querySelectorAll(".corona");
function coronaMove() {
    ugiCron.forEach(function (element) {
        element.innerHTML = "<img class='corona' src=\"covid19.jpeg\" alt=\"\">"; //replace  element to covid for case that was game alredy
        element.style.top = randomPosition() + "vh";
        element.style.left = randomPosition() + "vw";
        element.style.visibility = "visible";
    });
    // debugger
    overLapCheck();
    console.log("----next game:----");
}
console.log(ugiCron);
console.dir(ugiCron);
function randomPosition() {
    var postion;
    postion = Math.random() * 90;
    return postion;
}
var intervalID = setInterval(coronaMove, 2000);
function overLapCheck() {
    for (var i = 0; i < ugiCron.length; i++) {
        for (var j = i + 1; j < ugiCron.length; j++) {
            if (
            // check the conditions if not overlap then flip the boolean to overlap
            !(ugiCron[i].getBoundingClientRect().top >
                ugiCron[j].getBoundingClientRect().bottom ||
                ugiCron[i].getBoundingClientRect().right <
                    ugiCron[j].getBoundingClientRect().left ||
                ugiCron[i].getBoundingClientRect().bottom <
                    ugiCron[j].getBoundingClientRect().top ||
                ugiCron[i].getBoundingClientRect().left >
                    ugiCron[j].getBoundingClientRect().right) && i != j // eleminet the possibility for same index element
            ) {
                console.log("covid Collision id " + i + " and " + j);
                ugiCron[j].innerHTML = "<img class='explosion' src=\"Boom-PNG.png\" alt=\"\">"; //replace one element to explosion
                ugiCron[i].style.visibility = "hidden"; // hide the other element
            }
        }
    }
}
