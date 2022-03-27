function handleGetText(event) {
    console.dir(event);
    console.log(event.target.value);
    var inputName = document.querySelector("#inputName");
    inputName.innerText = event.target.value;
    var inputEmail = document.querySelector("#inputEmail");
    inputEmail.innerText = event.target.value;
    var inputPassword = document.querySelector("#inputPassword");
    inputPassword.innerText = event.target.value;
}
