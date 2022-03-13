var box = document.querySelectorAll("#box");
box.forEach(function (element) {
    element.onmouseenter = handleEvent;
    element.onmouseleave = handleEventLeave;
});
function handleEvent(ev) {
    console.dir(ev.target);
    // ev.target.style.backgroundColor = "#000000"
    ev.target.style.visibility = "hidden";
}
function handleEventLeave(ev) {
    console.dir(ev.target);
    // ev.target.style.backgroundColor = "#f1f1f1"
    ev.target.style.visibility = "visible";
}
