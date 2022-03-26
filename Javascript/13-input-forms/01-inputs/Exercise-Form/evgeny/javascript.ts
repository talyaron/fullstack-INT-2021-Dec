

const image = document.querySelector('#image_input')
var uploaded_image:any = "";
const root:any = document.querySelector("#root");

root.innerHTML = '<div id="name"><p></p></div><div id="email"><p></p></div><div id="password"><p></p></div>'

function handleName(event){
    let name:any = document.querySelector("#name");
    name.innerText = `Name: ${event.target.value}`;
}
function handleEmail(event){
    let email:any = document.querySelector("#email");
    email.innerText = `email: ${event.target.value}`;
}
function handlePassword(event){
    let password:any = document.querySelector("#password");
    password.innerText = `password: ${event.target.value}`;
    
}





image.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);



})