function showPlayerImg(event) {
    console.log(event);
    var myPlayer = document.getElementById('selectFootball');
    if (event.target.value == "messi") {
        var valueOpactiy = event.target.style;
        valueOpactiy.opacity = 0;
    }
}
