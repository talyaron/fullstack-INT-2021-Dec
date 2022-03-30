function handleSend(ev) {
    ev.preventDefault();
    console.log(ev);
    var username = ev.target.elements.UserName.value;
    var password = ev.target.elements.password.value;
    console.log(username, password);
}
