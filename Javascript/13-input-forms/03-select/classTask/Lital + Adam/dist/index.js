console.log("hey");
function checkWhichFlag(event) {
    switch (event.target.value) {
        case "israelFlag":
            document.getElementById("flagImg").innerHTML = "<img src='./dist/israel.png'>";
            break;
        case "swissFlag":
            document.getElementById("flagImg").innerHTML = "<img src='./dist/swiss.png'>";
            break;
        case "japanFlag":
            document.getElementById("flagImg").innerHTML = "<img src='./dist/japan.png'>";
            break;
    }
}
