var form = document.querySelector('form');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var match = document.querySelector('#match');
var luckyNumberInput = document.querySelector('#number');
var luckyNumberDiv = document.querySelector('#luckyNumber');
var url = document.querySelector('#url');
var userImage = document.querySelector('#userImage');
var uploadFile = document.querySelector('#profilePic');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    username.value === password.value ? match.innerText = 'Match' : match.innerText = 'Not matching';
}, false);
luckyNumberInput.addEventListener('change', function (e) {
    luckyNumberDiv.innerHTML = "Your lucky number:" + e.target.value;
}, false);
url.addEventListener('change', function (e) {
    userImage.src = "" + e.target.value;
}, false);
uploadFile.addEventListener('change', function (e) {
    console.log(window.URL);
    var dire = window.URL.createObjectURL(e.target.files[0]);
    console.log(dire);
    userImage.src = "" + dire;
}, false);
