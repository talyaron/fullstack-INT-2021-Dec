console.log("hi!");
function handleNameCheck(event) {
    console.dir(event.target.value);
    var nameOutput = document.querySelector("#name_output");
    nameOutput.innerHTML = "Your name is: " + event.target.value;
}
function handleEmailCheck(event) {
    console.dir(event.target.value);
    var emailOutput = document.querySelector("#email_output");
    emailOutput.innerHTML = "Your email is: " + event.target.value;
}
function handlePasswordCheck(event) {
    console.dir(event.target.value);
    var passwordOutput = document.querySelector("#password_output");
    passwordOutput.innerHTML = "Your password is: " + event.target.value;
}
