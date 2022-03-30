function handleSend(ev) {
    ev.preventDefault();
    console.log(ev);
    var userName = ev.target.elements.userName.value;
    var password = ev.target.elements.password.value;
    ev.target.elements.userName.value = '';
    ev.target.elements.password.value = '';
    console.log(userName, password);
}
