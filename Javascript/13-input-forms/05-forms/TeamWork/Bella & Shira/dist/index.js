function handleSend(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var firstInput = ev.target.elements.firstInput.value;
        var secondInput = ev.target.elements.secondInput.value;
        ev.target.elements.firstInput.value = '';
        ev.target.elements.secondInput.value = '';
        console.log(Math.floor(firstInput / secondInput));
        var result = document.querySelector('.result');
        var value = Math.abs(firstInput / secondInput);
        result.innerHTML = value;
    }
    catch (err) {
        console.log(err);
    }
}
function handleSignUp(ev) {
    try {
        ev.preventDefault();
        var userName = ev.target.elements.userName.value;
        var password = ev.target.elements.password.value;
        var repeatPassword = ev.target.elements.repeatPassword.value;
        var image = document.querySelector('.img');
        var imgValue = ev.target.elements.image.value;
        image.innerHTML = "<img src=" + imgValue + ">";
        console.log(userName, password, repeatPassword, imgValue);
        // compare passwords
        if (repeatPassword != password) {
            alert('Your passwords does not match, try again!');
            console.log('false password');
            return false;
        }
        else {
            console.log(password);
        }
    }
    catch (err) {
        console.log(err);
    }
}
