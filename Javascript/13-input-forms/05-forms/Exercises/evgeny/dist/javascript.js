function handle(ev) {
    var elements = ev.target.elements;
    ev.preventDefault();
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    var passOne = ev.target.elements.password.value;
    var passTwo = ev.target.elements.repassword.value;
    if (passOne === passTwo) {
        console.log(result);
    }
    else {
        document.querySelector("#error").innerHTML = '<p>password does not match</p>';
    }
}
