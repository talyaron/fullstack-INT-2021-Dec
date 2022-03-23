function handleGetText(event) {
    console.dir(event);
    console.log(event.key);
    console.log(event.target.value);
    var root = document.querySelector("#root");
    root.innerText = event.target.value;
}
function handleChangeColor(event) {
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value;
}
function handleCheck(event) {
    console.dir(event);
    console.log(event.target.checked);
}
function handleGetNumber(ev) {
    try {
        var number = ev.target.value;
        console.log(typeof number);
        if (typeof number !== "number")
            throw new Error("The input of the user is not of type number");
        alert(number * 10);
    }
    catch (err) {
        console.error(err);
        alert(err.message);
    }
}
