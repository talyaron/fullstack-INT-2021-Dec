var userName = document.getElementById("#name");
var email = document.getElementById("#email");
var password = document.getElementById("#password");
document.addEventListener('keyup', logKey);
function logKey(ev) {
    ev.textContent += " " + ev.code;
}
