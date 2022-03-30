var form = document.querySelector('#signUpForm');
function handleFirstName(ev) {
    console.dir(ev);
    var inputNumber = document.querySelector("#" + ev.target.name);
    var value = ev.target.value;
    inputNumber.innerHTML = value;
}
function handleLastName(ev) {
    console.dir(ev);
    var inputNumber = document.querySelector("#" + ev.target.name);
    var value = ev.target.value;
    inputNumber.innerHTML = value;
}
function handleEmail(ev) {
    console.dir(ev);
    var inputNumber = document.querySelector("#" + ev.target.name);
    var value = ev.target.value;
    inputNumber.innerHTML = value;
}
function handlePhoneNumber(ev) {
    console.dir(ev);
    var inputNumber = document.querySelector("#" + ev.target.name);
    var value = ev.target.value;
    inputNumber.innerHTML = value;
}
;
