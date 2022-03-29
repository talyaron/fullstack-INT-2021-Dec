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
function signUp() {
    if (formPassword.value === formconfirmPassword.value) {
        userName = formUserName.value;
        password = formPassword.value;
        setPhotoURL();
        formSignUpMsg.innerHTML = "sign up success, you will recive confirmation on Mobile Phone: " + formmobilePhone.value;
    }
    else {
        alert("confirm password don't match");
    }
}
function handleLogin() {
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
function setPhotoURL() {
    //type script show error but its work need to check probbly type of element
    formUserPhoto.src = formPhotoURL.value;
}
