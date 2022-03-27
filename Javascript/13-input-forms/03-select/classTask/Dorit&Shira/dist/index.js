var choice = "";
function handleSelectFlag(event) {
    choice = event.target.value;
    switch (choice) {
        case "algeria":
            hendleAlgeria();
            break;
        case "ohio":
            hendleOhio();
            break;
        case "swiss":
            hendleSwizerland();
            break;
        case "nepal":
            hendleNepal();
            break;
        default:
            console.log('defualt');
    }
    function hendleAlgeria() {
        var value = "images/Algeria.PNG";
        var outPut = document.querySelector(".img");
        outPut.innerHTML = "<img src=\"" + value + "\" width=\"120px\" height=\"120px\">";
    }
    function hendleSwizerland() {
        var value = "images/swizerland.PNG";
        var outPut = document.querySelector(".img");
        outPut.innerHTML = "<img src=\"" + value + "\" width=\"120px\" height=\"120px\">";
    }
    function hendleNepal() {
        var value = "images/nepal.PNG";
        var outPut = document.querySelector(".img");
        outPut.innerHTML = "<img src=\"" + value + "\" width=\"120px\" height=\"120px\">";
    }
    function hendleOhio() {
        var value = "images/ohio.PNG";
        var outPut = document.querySelector(".img");
        outPut.innerHTML = "<img src=\"" + value + "\" width=\"120px\" height=\"120px\">";
    }
}
