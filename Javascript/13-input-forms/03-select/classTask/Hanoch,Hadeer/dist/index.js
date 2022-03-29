function HandleGetFlag(ev) {
    console.log(ev.target.value);
    var value = ev.target.value;
    var imgflag = document.querySelector('#imgflag');
    if (value == "turkey") {
        imgflag.innerHTML = "<img src=\"./dist/turkeyflag.jpg\" alt=\"\"> <br> " + value;
    }
    else if (value == "ukriane") {
        imgflag.innerHTML = "<img src=\"./dist/ukrianeflag.jpg\" alt=\"\"> <br> " + value;
    }
}
var playresFutball = ["ronaldo", "messi"];
function createSelect(playrName) {
    var playrs = document.querySelector(".playrs");
    var newSelector = document.createElement("select");
    playrs.append(newSelector);
    playrName.forEach(function (elm) {
        var newOption = document.createElement("option");
        newSelector.append(newOption);
        newOption.innerHTML = elm;
    });
    newSelector.onchange = function () {
    };
}
function handleGetPlayrs(event) {
    var choose = event.target.value;
    if (choose == "football") {
        createSelect(playresFutball);
    }
}
