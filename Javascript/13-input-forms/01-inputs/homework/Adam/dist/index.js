function handleComplete(ev) {
    ev.preventDefault();
    console.log(ev);
    var userName = ev.target.elements.userName.value;
    var password = ev.target.elements.password.value;
    var image = ev.target.elements.image.value;
    console.log(userName, password, image);
}
