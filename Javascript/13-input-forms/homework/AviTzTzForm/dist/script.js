var btn = document.querySelector(".btn");
var uploadFile = document.querySelector("#upload");
var inputNumber = document.querySelector(".numberarea");
var img = document.querySelector(".img");
var parNumber = document.querySelector(".parnumber");
var wrapper = document.querySelector('.wrapper');
uploadFile.addEventListener("change", function (e) {
    var file = new FileReader();
    file.onload = function () {
        img.src = file.result;
        img.style.width = "30vw";
        img.style.height = "25vh";
    };
    file.readAsDataURL(uploadFile.files[0]);
});
inputNumber.addEventListener("keypress", function (e) {
    if (!Number(e.key)) {
        return e.preventDefault();
    }
    else {
        inputNumber.addEventListener("keyup", function (e) {
            parNumber.innerHTML = inputNumber.value;
        });
    }
});
btn.addEventListener("click", function (e) {
    e.preventDefault();
    parNumber.style.color = getRandomColor();
    wrapper.style.border = "solid 2px " + getRandomColor();
});
function getRandomColor() {
    var hex = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
getRandomColor();
