function renderimg(event) {
    console.log(event);
    switch (event.target.value) {
        case "messi":
            document.getElementById("selectFootball").innerHTML = "<img src='messi.jpg'>";
            break;
        case "swissFlag":
            document.getElementById("flagImg").innerHTML = "<img src='./dist/swiss.png'>";
            break;
        case "japanFlag":
            document.getElementById("flagImg").innerHTML = "<img src='./dist/japan.png'>";
            break;
    }
}
