function handleChange(event) {
    var newElement = document.createElement("div");
    newElement.className = 'firstname';
    console.dir(event);
    newElement.innerHTML = event.target.value;
}
