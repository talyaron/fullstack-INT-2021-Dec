function renderimg(event) {
    console.log(event);
    switch (event.target.value) {
        case "messi":
            document.getElementById("messi").innerHTML = "<img src='messi.jpg'>";
            break;
        case "swissFlag":
            document.getElementById("flagImg").innerHTML = "<img src='./dist/swiss.png'>";
            break;
        case "japanFlag":
            document.getElementById("flagImg").innerHTML = "<img src='./dist/japan.png'>";
            break;
    }
}
function setCar() {
    var img = document.getElementById("image");
    img.src = this.value;
    return false;
}
document.getElementById("CarList").onchange = setCar;
