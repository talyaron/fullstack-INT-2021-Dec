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
function handleSend(ev) {
    ev.preventDefault();
    console.log(ev);
    var name = ev.target.elements.name.value;
    var eeee = ev.target.elements.eeee.value;
    var bbb = ev.target.elements.bbb.checked;
    var number = ev.target.elements.number.valueAsNumber;
    var color = ev.target.elements.color.value;
    console.log(name, eeee, bbb, number, color);
    var elements = ev.target.elements;
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type === "checkbox") {
            result[elements[i].name] = elements[i].checked;
        }
        else if (elements[i].type !== "submit") {
            result[elements[i].name] = elements[i].value;
        }
    }
    console.log(result);
}
