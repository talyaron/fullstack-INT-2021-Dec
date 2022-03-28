var body = document.querySelector("body");
var pic = document.querySelector(".answerpic");
var num = document.querySelector(".answernum");
function handleUploadPic(event) {
    var theImg = document.createElement("img");
    theImg.src = event.target.value;
    pic.innerHTML = '';
    pic.appendChild(theImg);
}
function handleChoseNum(event) {
    var theNum = event.target.value;
    if (isNaN(theNum)) {
        num.innerHTML = 'please enter a number';
    }
    else {
        num.innerHTML = theNum;
    }
}
var userName;
function saveUserName(event) {
    userName = event.target.value;
}
var userPassword;
function saveUserPassword(event) {
    userPassword = event.target.value;
}
function handleName(event) {
    var name = event.target.value;
}
