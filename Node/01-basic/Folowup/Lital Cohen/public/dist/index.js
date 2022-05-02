var root = document.querySelector('#root');
root.onmouseenter = handleChange;
function handleChange(ev) {
    ev.target.style.color = "red";
}
