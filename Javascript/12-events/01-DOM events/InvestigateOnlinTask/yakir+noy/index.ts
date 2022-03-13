const box:Array<any>  = document.querySelectorAll("#box");

box.forEach(element => {
    element.onmouseenter  = handleEvent
    element.onmouseleave = handleEventLeave
});



function handleEvent(ev) {
    console.dir(ev.target);
    // ev.target.style.backgroundColor = "#000000"
    // ev.target.style.visibility = "hidden"
    ev.target.style.opacity = "0"
}

function handleEventLeave(ev) {
    console.dir(ev.target);
    // ev.target.style.backgroundColor = "#f1f1f1"
    // ev.target.style.visibility = "visible"
    ev.target.style.opacity = "1"
}