var image = document.querySelector('#image_input');
var uploaded_image = "";
var root = document.querySelector("#root");
root.innerHTML = '<div id="name"><p></p></div><div id="email"><p></p></div><div id="password"><p></p></div>';
function handleName(event) {
    var name = document.querySelector("#name");
    name.innerText = "Name: " + event.target.value;
}
function handleEmail(event) {
    var email = document.querySelector("#email");
    email.innerText = "email: " + event.target.value;
}
function handlePassword(event) {
    var password = document.querySelector("#password");
    password.innerText = "password: " + event.target.value;
}
image.addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = "url(" + uploaded_image + ")";
    });
    reader.readAsDataURL(this.files[0]);
});
