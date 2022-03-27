console.log("Server online");
var body = document.querySelector('body');
var userimg = document.querySelector('.user_img');
var writeHere = document.querySelector('.success_or_fail');
var numbersDiv = document.querySelector('.printed_numbers');
function checkurl(event) {
    var url = event.target.value;
    userimg.src = "" + url;
}
function checkfile() {
    var fileInput = document.getElementById('fileup');
    var selectedFile = fileInput.files[0];
    var path = (window.URL || window.webkitURL).createObjectURL(selectedFile);
    console.log('path', path);
    if (selectedFile.type === "image/jpeg") {
        console.log("jpg");
        userimg.src = "" + path;
    }
    else {
        alert("Only upload jpg files please!");
    }
}
function check() {
    var userName = document.getElementById('first');
    var pass = document.getElementById('second');
    if (userName.value === pass.value) {
        writeHere.innerHTML = "Match!";
        writeHere.style.color = "green";
    }
    else {
        writeHere.innerHTML = "try again!";
        writeHere.style.color = "red";
    }
}
function printNumbers(event) {
    console.log(event.target.value);
    numbersDiv.innerHTML = "" + event.target.value;
}
