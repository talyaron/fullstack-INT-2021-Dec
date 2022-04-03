var astroidArray = document.querySelectorAll(".astroid");
function randomPlace() {
    var y = (Math.floor((Math.random()) * 80));
    return y;
}
function checkForCrash(astArray) {
    for (var i = 0; i < astArray.length; i++) {
        var thisx = astArray[i].style.left;
        var thisy = astArray[i].style.top;
        for (var j = i + 1; j < astArray.length; j++) {
            var otherx = astArray[j].style.left;
            var othery = astArray[j].style.top;
            var difx = Math.abs(thisx - otherx);
            var dify = Math.abs(thisy - othery);
            if (difx <= 60 || dify <= 40) {
                alert("oh no! youre dead X");
                astArray[i].style.display = "none";
                astArray[j].style.display = "none";
            }
        }
    }
}
function chaos() {
    for (var i = 0; i < astroidArray.length; i++) {
        astroidArray[i].style.top = randomPlace() + "vh";
        astroidArray[i].style.left = randomPlace() + "vw";
    }
    checkForCrash(astroidArray);
}
setInterval(chaos, 5000);
window.addEventListener("load", checkForCrash);
