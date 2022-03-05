var textOne = document.querySelector("#text1");
var textTwo = document.querySelector("#text2");
function thisfun(el1, el2) {
    var temp = el1.innerText;
    el1.innerText = el2.innerText;
    el2.innerText = temp;
}
var useranswer = window.prompt("would you like to fix the page?");
if (useranswer == "yes") {
    thisfun(textOne, textTwo);
}
else {
    alert("you are rude!");
}
