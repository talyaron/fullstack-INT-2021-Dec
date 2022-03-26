const root:HTMLDivElement= document.querySelector(`#root`);

function handleName(event){
    let name:any=document.createElement("div");
    name.id="name";
    name.innerHTML += `<div id="Text"><p>name: ${event.target.value}</p></div>`;
    root.appendChild(name);
}