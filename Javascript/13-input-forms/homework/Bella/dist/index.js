var form = document.querySelector('#root');
function handlePhoneNumber(event) {
    console.dir(event);
    var inputNumber = document.querySelector("#" + event.target.name);
    var value = event.target.value;
    inputNumber.innerHTML = value;
    form.append(value);
}
;
