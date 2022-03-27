const username:HTMLDivElement= document.querySelector("#root")
    
function handleName(event){
    username.innerHTML+=`<div id="#name"><p>Name: my name is ${event.target.value}<p></div>`;
}

function handleEmail(event){
    username.innerHTML+=`<div id="#email"><p>Email: my name is ${event.target.value}<p></div>`;
}

function handlePassword(event){
    username.innerHTML+=`<div id="#password"><p>Password: my name is ${event.target.value}<p></div>`;
}

