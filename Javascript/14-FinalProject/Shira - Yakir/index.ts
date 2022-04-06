let userName;
let password;
const formUserName: HTMLInputElement = document.querySelector("#UserName");
const formPassword: HTMLInputElement = document.querySelector("#password");
const formconfirmPassword: HTMLInputElement = document.querySelector("#repeatPassword");
const formSignUpMsg: HTMLElement = document.querySelector("#signUpMsg");
const formLoginMsg: HTMLElement = document.querySelector("#loginMsg");

function handleSignUp(ev) {
    ev.preventDefault();
    if (formPassword.value === formconfirmPassword.value) {
        userName = formUserName.value;
        password = formPassword.value;
        const elements = ev.target.elements;
        formSignUpMsg.innerHTML = `sign up success`;
    } else {
        alert("confirm password dosent match");
    }
}

function handleLogin(ev) {
    ev.preventDefault();
    const LoginUserName: HTMLInputElement =
        document.querySelector("#LoginUserName");
    const LoginPassword: HTMLInputElement =
        document.querySelector("#LoginPassword");
    const htmlBody: HTMLElement = document.querySelector("body");

    const loginStatus = checkLogin(LoginUserName.value, LoginPassword.value);
    if (loginStatus) {
        htmlBody.style.background = "green";
        formLoginMsg.innerHTML = `success Login`;



    } else {
        htmlBody.style.background = "red";
        formLoginMsg.innerHTML = `Login Failed`;
    }
}

function checkLogin(check_username: String, check_password: string): Boolean {
    if (check_username === userName && check_password === password) return true;
    else return false;
}