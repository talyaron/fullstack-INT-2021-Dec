
let result = {};

interface users{
    name:string,
    username:string,
    password:string,
    address?:string,
    telephon?:number,
    email?:string
}
let user:users{

}
const manager:users ={
    name:"tal Yaron",
    username:"tal",
    password:"1234"


}
 
function handleUser(ev){
    ev.preventDefault();
    const details = ev.target.elements
    for (let i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
        result[details[i].name] = details[i].value;
  
      }
}
console.log(result['name']) 
if (result['name'] === manager['username'] && result['pass'] === manager['password']){
    window.location.href="./index1.html"
     
}
}
const handleNew = function(ev){
    const root = document.querySelector("#root")
    root.innerHTML = `<div id="newitem">
                                <form action="" >
                                    <input type="text" name="typeName" placeholder="enter type of item" onchange="handleItem1(event)" >
                                    <input type="file" onchange="loadImg(event)" id="file" style="display: none;">
                                    <p><img id="output" width="200" /></p>
                                    <p><label for="file" style="cursor: pointer;" onclick="handleHidden(event)">Upload Image</label></p>
                                    <input type="number" name="price" placeholder="inter a price" onchange="handleItem0(event)" >

                                </form>
                                
                                <div id="addItemName"></div>
                                <div id="addItemPrice"></div>
                                </div>
                                <button onclick="handleDelete(event)"> delete item</button>`

}
var loadImg = function(event) {
	var image:any = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
}
function handleHidden(ev){
    ev.target.hidden = true
}
function handleItem1(ev){
    console.log(ev)
    const content = ev.target.value
    const div = document.querySelector("#addItemName")
     div.innerHTML = `<p>${content}</p>`
     ev.target.hidden = true
    
}
function handleItem0(ev){
    console.log(ev)
    const content = ev.target.value
     const div = document.querySelector("#addItemPrice")
    div.innerHTML = `<p>${content} ש"ח</p>`
    ev.target.hidden = true

    
}
function handleDelete(ev ){
    const catchItem = document.querySelector("#newitem")
    console.log(catchItem)
    catchItem.innerHTML = ""
    ev.target.hidden = true
}