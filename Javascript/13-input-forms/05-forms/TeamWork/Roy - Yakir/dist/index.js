var userName;
var password;
var formPassword = document.querySelector("#password");
var formconfirmPassword = document.querySelector("#confirmPassword");
var formUserName = document.querySelector("#UserName");
var formmobilePhone = document.querySelector("#mobilePhone");
var formPhotoURL = document.querySelector("#photoURL");
var formUserPhoto = document.querySelector("#userPhoto");
var formSignUpMsg = document.querySelector("#signUpMsg");
// const formPolicy: HTMLInputElement = document.querySelector("#policy"); -- not use now
var formLoginMsg = document.querySelector("#loginMsg");
function signUp(ev) {
    ev.preventDefault();
    if (formPassword.value === formconfirmPassword.value) {
        userName = formUserName.value;
        password = formPassword.value;
        // setPhotoURL()
        var elements = ev.target.elements;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].type === "files") {
                handleFiles(elements[i].file);
            }
        }
        formSignUpMsg.innerHTML = "sign up success, you will recive confirmation on Mobile Phone: " + formmobilePhone.value;
    }
    else {
        alert("confirm password dosent match");
    }
}
function handleLogin(ev) {
    ev.preventDefault();
    var LoginUserName = document.querySelector("#LoginUserName");
    var LoginPassword = document.querySelector("#LoginPassword");
    var htmlBody = document.querySelector("body");
    var loginStatus = checkLogin(LoginUserName.value, LoginPassword.value);
    if (loginStatus) {
        htmlBody.style.background = "green";
        formLoginMsg.innerHTML = "success Login";
        printResult(ev);
    }
    else {
        htmlBody.style.background = "red";
        formLoginMsg.innerHTML = "Login Failed";
    }
}
function checkLogin(check_username, check_password) {
    if (check_username === userName && check_password === password)
        return true;
    else
        return false;
}
function setPhotoURL() {
    //type script show error but its work need to check probbly type of element
    formUserPhoto.src = formPhotoURL.value;
}
// debugger;
function printResult(ev) {
    ev.preventDefault();
    console.log(ev);
    var elements = ev.target.elements;
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i].name + ": " + elements[i].value);
        if (elements[i].type === "checkbox") {
            result[elements[i].name] = elements[i].checked;
        }
        else if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    console.dir(result);
}
function handleFiles(files) {
    // formUserPhoto.src = files[0];
    document.getElementById('photoURL').onchange = function (evt) {
        var tgt = evt.target || window.event.srcElement, files = tgt.files;
        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById(outImage).src = fr.result;
            };
            fr.readAsDataURL(files[0]);
        }
    };
}
