function handleSend(ev) {
    ev.preventDefault();
    console.log(ev);
    var name = ev.target.elements.name.value;
    var username = ev.target.elements.username.value;
    var password = ev.target.elements.password.value;
    console.log(name, username, password);
}
