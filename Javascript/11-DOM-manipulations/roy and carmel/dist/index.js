var astroidArray = document.querySelectorAll(".astroid");
function randomPlace() {
    var y = (Math.floor((Math.random()) * 80));
    return y;
}
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
            console.log(difx, dify);
            if (difx <= 10 && dify <= 10) {
                console.log(difx, dify);
                console.log("oh no! youre dead X");
                // astArray[i].style.display=`none`
                // astArray[j].style.display=`none`
            }
        }
    }
}
function checkBetter(astArray) {
}
function chaos() {
    for (var i = 0; i < astroidArray.length; i++) {
        astroidArray[i].style.top = randomPlace() + "vh";
        astroidArray[i].style.left = randomPlace() + "vw";
    }
    checkForCrash(astroidArray);
}
setInterval(chaos, 5000);
