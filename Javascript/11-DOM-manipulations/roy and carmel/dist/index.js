var astroidArray = document.querySelectorAll(".astroid");
function randomPlace() {
    var y = (Math.floor((Math.random()) * 90));
    return y;
}
var exploded = document.querySelector(".explode");
var aswid = astroidArray[0].style.width;
var ashei = astroidArray[0].style.height;
function goneONclick(ev) {
    ev.target.style.display = 'none';
    var explod = document.querySelector(".explode");
    console.log(explod);
    explod.style = "display: inline; left:" + ev.x + "; top:" + ev.y;
}
for (var i = 0; i < astroidArray.length; i++) {
    astroidArray[i].onclick = goneONclick;
}
function checkForCrash(astArray, xwidth, xheight) {
    var crashedORnot = ["no"];
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
            crashedORnot.push("no");
            if (i == j) {
                break;
            }
            console.log(crashedORnot[j]);
            if ((difx <= xwidth && dify <= xheight) && (crashedORnot[j] == "no")) {
                console.log(difx, dify);
                console.log(crashedORnot[j]);
                astArray[j].style.display = 'none';
                exploded.style.display = "inline";
                exploded.style.left = otherx;
                exploded.style.top = othery;
                crashedORnot[j] = "yes";
            }
        }
    }
}
function checkBetter(astArray) {
}
function chaos() {
    checkForCrash(astroidArray, aswid, ashei);
    for (var i = 0; i < astroidArray.length; i++) {
        astroidArray[i].style.top = randomPlace() + "vh";
        astroidArray[i].style.left = randomPlace() + "vw";
    }
}
setInterval(chaos, 5000);
