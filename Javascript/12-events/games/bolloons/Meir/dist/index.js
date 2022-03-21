var ballons = document.querySelectorAll('#ballon');
console.dir(ballons);
function createBallon() {
    var ballonId = uid();
    document.body.innerHTML += "<img id='" + ballonId + "' class=ballon src=\"./dist/ballon.svg.png\"/>";
}
