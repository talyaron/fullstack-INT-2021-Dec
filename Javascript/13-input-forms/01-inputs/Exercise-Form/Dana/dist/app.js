console.log('hi');
var img = document.querySelector('#image_input');
var uploaded_image = "";
var root = document.querySelector("#root");
function myFunction() {
    var x = document.getElementById("myNumber").value;
    document.getElementById("demo").innerHTML = x;
}
img.addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = "url(" + uploaded_image + ")";
    });
    reader.readAsDataURL(this.files[0]);
});
