var box = document.querySelector("#box");
box.onmousedown = handleEvent;
box.onmouseup = handleEventLeave;
function handleEvent(ev) {
    console.dir(ev.target);
    ev.target.style.backgroundColor = "#000000";
}
function handleEventLeave(ev) {
    console.dir(ev.target);
    ev.target.style.backgroundColor = "#f1f1f1";
}
