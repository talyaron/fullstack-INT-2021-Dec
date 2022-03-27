const root:HTMLDivElement= document.querySelector(`#root`);
root.innerHTML=`<div id="name"><p>/p></div><div id="email">
function handleName(event){
    let name:any=document.createElement("div");
    name.id="name";
    name.innerHTML += `<div id="Text"><p>name: ${event.target.value}</p></div>`;
    root.appendChild(name);
}