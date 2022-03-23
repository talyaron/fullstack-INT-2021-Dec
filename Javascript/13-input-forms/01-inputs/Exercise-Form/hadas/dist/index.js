function hendlename(ev) {
    var name = document.querySelector("#name");
    name.innerHTML = ev.target.value;
}
function hndleemail(event) {
    var email = document.querySelector("#email");
    email.innerHTML = event.target.value;
}
function hndlepassword(ev) {
    var password = document.querySelector("#password");
    password.innerHTML = ev.target.value;
}
