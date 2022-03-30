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
        var value = Math.floor(firstInput / secondInput);
        result.innerHTML = value;
    }
    catch (err) {
        console.log(err);
    }
}
function handleLogin(ev) {
    try {
        ev.preventDefault();
        var image = document.querySelector('.img');
        var imgValue = ev.target.elements.image.value;
        image.innerHTML = "<img src=" + imgValue + ">";
        console.log(imgValue);
    }
    catch (err) {
        console.log(err);
    }
}
