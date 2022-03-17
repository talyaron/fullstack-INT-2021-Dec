var astroidArray = document.querySelectorAll(".astroid");
function randomPlace() {
    var y = (Math.floor((Math.random()) * 90));
    return y;
}
var exploded = document.querySelector(".explode");
function checkForCrash(astArray) {
    for (var i = 0; i < astArray.length; i++) {
        var thisx = astArray[i].style.left;
        var numthisx = thisx.replace('vw', '');
        var thisy = astArray[i].style.top;
        var numthisy = thisy.replace('vh', '');
        for (var j = i + 1; j < astArray.length; j++) {
            var otherx = astArray[j].style.left;
            var numotherx = otherx.replace('vw', '');
            var othery = astArray[j].style.top;
            var numothery = othery.replace('vh', '');
            var difx = Math.abs(numthisx - numotherx);
            var dify = Math.abs(numthisy - numothery);
            if (i == j) {
                break;
            }
            if (difx <= 5 && dify <= 5) {
                console.log(difx, dify);
                exploded.style.display = "inline";
                exploded.style.left = otherx;
                exploded.style.top = othery;
            }
        }
    }
}
function checkBetter(astArray) {
}
function chaos() {
    checkForCrash(astroidArray);
    for (var i = 0; i < astroidArray.length; i++) {
        astroidArray[i].style.top = randomPlace() + "vh";
        astroidArray[i].style.left = randomPlace() + "vw";
    }
}
setInterval(chaos, 5000);
