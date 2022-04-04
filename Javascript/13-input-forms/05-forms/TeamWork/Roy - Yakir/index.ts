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

function signUp(ev) {
  ev.preventDefault();
  if (formPassword.value === formconfirmPassword.value) {
    userName = formUserName.value;
    password = formPassword.value;
    // setPhotoURL()
    const elements = ev.target.elements;

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type === "files" ) {
        handleFiles(elements[i].file);
      }
    }
      
    
    formSignUpMsg.innerHTML = `sign up success, you will recive confirmation on Mobile Phone: ${formmobilePhone.value}`;
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

    printResult(ev);

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

// debugger;
function printResult(ev){
  ev.preventDefault();
  console.log(ev);
  const elements = ev.target.elements;
  const result = {};
  for (let i = 0; i < elements.length; i++) {

    console.log(`${elements[i].name}: ${elements[i].value}`)

    if (elements[i].type === "checkbox" ) {
      result[elements[i].name] = elements[i].checked;
    } else if (elements[i].name && elements[i].value) {
      result[elements[i].name] = elements[i].value;
    }
 
  }
  console.dir(result);
 
}


function handleFiles(files) {

  // formUserPhoto.src = files[0];

  document.getElementById('photoURL').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById(outImage).src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }



}



