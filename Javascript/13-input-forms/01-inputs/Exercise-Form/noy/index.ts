const root:HTMLDivElement = document.querySelector("#root");

function handleName(event){
    root.innerHTML += `<div id="#name"><p>Name: ${event.target.value}</p></div>`;
}

function handleEmail(event){
    
}