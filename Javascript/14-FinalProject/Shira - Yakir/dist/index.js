var userName;
var password;
var formUserName = document.querySelector("#UserName");
var formPassword = document.querySelector("#password");
var formconfirmPassword = document.querySelector("#repeatPassword");
var formSignUpMsg = document.querySelector("#signUpMsg");
var formLoginMsg = document.querySelector("#loginMsg");
function handleSignUp(event) {
    event.preventDefault();
    if (formPassword.value === formconfirmPassword.value) {
        userName = formUserName.value;
        password = formPassword.value;
        var elements = event.target.elements;
        formSignUpMsg.innerHTML = "sign up success";
    }
    else {
        alert("confirm password dosent match");
        formSignUpMsg.innerHTML = "confirm password dosent match";
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
function tasksPage() {
    var today = new Date();
    var todayDisplay = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    var todayDate = document.querySelector("#todayDate");
    todayDate.innerHTML = "" + todayDisplay;
}
tasksPage();
function addTask(event) {
    var addTaskInput = document.querySelector("#addTask");
}
