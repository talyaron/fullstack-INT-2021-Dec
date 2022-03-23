function handleGetText(event) {
    console.dir(event);
    console.log(event.key);
    console.log(event.target.value);
    var root = document.querySelector('#root');
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
