function handleSetName(ev) {
    var name = ev.target.value;
    console.log(name);
    localStorage.setItem('name', JSON.stringify({ name: name }));
}
function handleLoadIndex() {
}
function handleLoadSecond() {
    var userInput = JSON.parse(localStorage.getItem('name'));
    console.log(userInput);
    var nameRoot = document.querySelector('#nameRoot');
    nameRoot.innerHTML = userInput.name;
}
