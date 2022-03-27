var popupBack = document.querySelector(".popupback");
var username = document.querySelector(".username");
var password = document.querySelector(".password");
var btnpopup = document.querySelector(".submitpopup");
var btn = document.querySelector(".btn");
var uploadFile = document.querySelector("#upload");
var inputNumber = document.querySelector(".numberarea");
var img = document.querySelector(".img");
var parNumber = document.querySelector(".parnumber");
var wrapper = document.querySelector(".wrapper");
btnpopup.onclick = handleClick;
// ----- Checking if the username nad password is correct ------ //
function handleClick() {
    if (username.value === "root" && password.value === "1111") {
        var h2 = document.createElement("h2");
        h2.innerText = "Success";
        h2.style.color = "greenyellow";
        h2.style.position = "absolute";
        h2.style.transform = "translate(-50%)";
        h2.style.left = "50%";
        h2.style.top = "20%";
        h2.style.fontSize = "3rem";
        popupBack.appendChild(h2);
        setTimeout(function () {
            popupBack.style.display = "none";
        }, 1000);
    }
    else {
        username.style.border = "solid 4px red";
        password.style.border = "solid 4px red";
        username.style.animation = 'wrong-pass-user 0.2ms ease-in 2000';
        password.style.animation = 'wrong-pass-user 0.2ms ease-in 2000';
        setTimeout(function () {
            username.style.border = "";
            password.style.border = "";
            username.style.animation = '';
            password.style.animation = '';
        }, 2000);
    }
}
// ----- Upload a file and insert it to the img ------ //
uploadFile.addEventListener("change", function (e) {
    var file = new FileReader();
    file.onload = function () {
        img.src = file.result;
        img.style.width = "30vw";
        img.style.height = "25vh";
    };
    file.readAsDataURL(uploadFile.files[0]);
});
// ----- Insert a number in the input and reflect it  ------ //
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
// ----- change things in the wrapper ------ //
btn.addEventListener("click", function (e) {
    e.preventDefault();
    parNumber.style.color = getRandomColor();
    wrapper.style.border = "solid 2px " + getRandomColor();
});
// ----- random color ------ //
function getRandomColor() {
    var hex = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
