//switch box content between elements (boxes)// 
var textFirstBox = document.querySelector("#text1");
var textSecBox = document.querySelector("#text2");
function switchCont(el1, el2) {
    var temp = el1.innerText;
    el1.innerText = el2.innerText;
    el2.innerText = temp;
}
