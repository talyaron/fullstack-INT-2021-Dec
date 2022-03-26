var astroidArray = document.querySelectorAll(".astroid");
function randomPlace() {
    var y = Math.floor(Math.random() * 90);
    return y;
}
var exploded = document.querySelector(".explode");
var aswid = astroidArray[0].style.width;
var ashei = astroidArray[0].style.height;
function goneONclick(ev) {
    // ev.target.style.display='none'
    console.log(ev);
    var explod = ev.target;
    console.dir(explod);
    explod.src = "explode.png";
    setTimeout(function () {
        ev.target.style.display = "none";
    }, 2000);
}
for (var i = 0; i < astroidArray.length; i++) {
    astroidArray[i].onclick = goneONclick;
}
function checkForCrash() {
    var crashedORnot = ["no"];
    for (var i = 0; i < astroidArray.length; i++) {
        var thisx = astroidArray[i].style.left;
        var numthisx = thisx.replace("vw", "");
        var thisy = astroidArray[i].style.top;
        var numthisy = thisy.replace("vh", "");
        var _loop_1 = function (j) {
            var otherx = astroidArray[j].style.left;
            var numotherx = otherx.replace("vw", "");
            var othery = astroidArray[j].style.top;
            var numothery = othery.replace("vh", "");
            var difx = Math.abs(numthisx - numotherx);
            var dify = Math.abs(numthisy - numothery);
            crashedORnot.push("no");
            // if (i == j) {
            //   break;
            // // }
            // console.log(crashedORnot[j]);
            if ((crashedORnot[j] == "no")) {
                console.log("step one");
                if ((difx <= aswid) && (dify <= ashei)) {
                    console.log(difx, dify);
                    console.log(crashedORnot[j]);
                    astroidArray[j].src = "explode.png";
                    setTimeout(function () {
                        astroidArray[j].style.display = "none";
                    }, 2000);
                    crashedORnot[j] = "yes";
                }
            }
        };
        for (var j = i + 1; j < astroidArray.length; j++) {
            _loop_1(j);
        }
    }
}
function chaos() {
    for (var i = 0; i < astroidArray.length; i++) {
        astroidArray[i].style.top = randomPlace() + "vh";
        astroidArray[i].style.left = randomPlace() + "vw";
    }
}
setInterval(chaos, 5000);
setInterval(checkForCrash, 1000);
