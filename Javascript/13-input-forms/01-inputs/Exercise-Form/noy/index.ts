const root:any = document.querySelector("#root");

root.innerHTML = '<div id="name"><p></p></div><div id="email"><p></p></div><div id="password"><p></p></div>'

function handleName(event){
    let name:any = document.querySelector("#name");
    name.innerText = `Name: ${event.target.value}`;
}

function handleEmail(event){
    let email:any = document.querySelector("#email");
    email.innerText = `E-mail: ${event.target.value}`;
}

function handlePassword(event){
    
}