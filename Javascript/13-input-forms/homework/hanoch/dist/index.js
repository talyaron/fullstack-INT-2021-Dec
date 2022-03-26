var number = document.querySelector("#phon");
var img = document.querySelector("#img");
console.dir(number);
function handleGetNumber(event) {
    var value = event.target.value;
    var outPut = document.querySelector(".phon");
    outPut.innerHTML = value;
}
function handleGetImg(event) {
    var value = event.target.value;
}
