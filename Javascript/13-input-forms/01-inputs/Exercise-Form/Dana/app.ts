console.log('hi')

const img = document.querySelector('#image_input')
var uploaded_image:any = "";
const root:any = document.querySelector("#root");


function myFunction() {
    var x = document.getElementById("myNumber").value;
    document.getElementById("output").innerHTML = x;
  }
  
img.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);



})