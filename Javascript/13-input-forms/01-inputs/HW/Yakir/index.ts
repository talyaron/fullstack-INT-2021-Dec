let userName;
let password;
const formPassword: HTMLInputElement = document.querySelector("#password");
const formconfirmPassword: HTMLInputElement =
  document.querySelector("#confirmPassword");
const formUserName: HTMLInputElement = document.querySelector("#UserName");
const formmobilePhone: HTMLInputElement =
  document.querySelector("#mobilePhone");
const formPhotoURL: HTMLInputElement = document.querySelector("#photoURL");
const formUserPhoto:HTMLElement = document.querySelector("#userPhoto");
const formSignUpMsg: HTMLElement = document.querySelector("#signUpMsg");
// const formPolicy: HTMLInputElement = document.querySelector("#policy"); -- not use now
const formLoginMsg: HTMLElement = document.querySelector("#loginMsg");

function signUp() {
  if (formPassword.value === formconfirmPassword.value) {
    userName = formUserName.value;
    password = formPassword.value;
    setPhotoURL()
    formSignUpMsg.innerHTML = `sign up success, you will recive confirmation on Mobile Phone: ${formmobilePhone.value}`;
  } else {
    alert("confirm password don't match");
  }
}

function handleLogin() {
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

function setPhotoURL(){
    //type script show error but its work need to check probbly type of element
    formUserPhoto.src = formPhotoURL.value;
}
