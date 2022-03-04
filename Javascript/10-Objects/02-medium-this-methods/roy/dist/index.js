var text1 = document.querySelector("#text1");
var text2 = document.querySelector("#text2");
console.dir(text1);
console.dir(text2);
function merge(text1, text2) {
    var copy = text1.innerHTML + text2.innerHTML;
    return copy;
}
var copy = merge(text1, text2);
document.querySelector("#text2").innerHTML = copy;
