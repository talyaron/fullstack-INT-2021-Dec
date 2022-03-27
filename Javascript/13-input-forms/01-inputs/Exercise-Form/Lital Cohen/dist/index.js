console.log("hello");
function handleGetText(event) {
    console.dir(event);
    var outputOfTExt = document.querySelector("#" + event.target.name);
    try {
        var value = event.target.value;
        outputOfTExt.innerHTML = value;
        console.log(value);
    }
    catch (error) {
        console.log(error);
    }
}
var image = document.getElementById("image");
function loadImg(event) {
    console.dir(event);
    var urlImg = new Image();
    urlImg.src = prompt("Please paste the URL of your pic");
    urlImg.onerror = function () {
        alert("OOPS! looks like your URL is wrong");
    };
    urlImg.onload = function () {
        image.src = urlImg.src;
    };
    console.log(urlImg);
}
function handleCopyTextDom() {
}
