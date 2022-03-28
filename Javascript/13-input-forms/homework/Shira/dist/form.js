function handleInputNumber(event) {
    console.dir(event);
    var inputNumber = document.querySelector("#" + event.target.name);
    try {
        var value = event.target.value;
        inputNumber.innerHTML = value;
    }
    catch (err) {
        console.log(err);
    }
}
function handleInputInage(event) {
    console.dir(event);
    var inputImg = document.querySelector("#" + event.target.name);
    try {
        var value = event.target.value;
        inputImg.innerHTML = "<img src=" + value + ">";
    }
    catch (err) {
        console.log(err);
    }
}
function handleLogin(event) {
    console.dir(event);
    var loginBtn = document.querySelector("#" + event.target.name);
    try {
    }
    catch (err) {
        console.log(err);
    }
}
