var form = document.querySelector('#root');
function handleFirstName(ev) { }
function handlePhoneNumber(ev) {
    console.dir(ev);
    var inputNumber = document.querySelector("#" + event.target.name);
    var value = ev.target.value;
    inputNumber.innerHTML = value;
}
;
