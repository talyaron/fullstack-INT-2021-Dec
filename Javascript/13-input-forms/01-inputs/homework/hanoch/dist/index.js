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
    var outPut = document.querySelector(".img");
    outPut.innerHTML = "<img src=\"" + value + "\">";
}
function handleGetIdentify(event) {
    var value = event.value;
    console.dir(value);
}
var nameIdentify = document.querySelector("#nameIdentify");
var passIdentify = document.querySelector("#passIdentify");
var name1 = document.querySelector("#name");
var pass = document.querySelector("#pass");
if (nameIdentify === name1 && passIdentify === pass) {
    document.body.style.backgroundColor = "red";
}
