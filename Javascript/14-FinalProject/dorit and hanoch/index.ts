let result = {};

interface users{
    name:string,
    username:string,
    password:string,
    address?:string,
    telephon?:number,
    email?:string
}
interface product{
    name:string,
    serialNo:string,
    description:string,
    price:number,
    currency:string,
    Pimage?:URL
}


// let user:users={

// }
const manager:users ={
    name:"Tal Yaron",
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
    // console.log(result['name']) 
    // console.log(manager['name'])
    // console.log(result['pass'])
    // console.log(manager['password'])
    if (result['name'] == manager['name'] && result['pass'] == manager['password']){
        window.location.href="index1.html"
    }
}

function handleNew(ev){

    const root:HTMLElement = document.querySelector("#root")
    const myButton:HTMLElement = document.querySelector("#button2")
    myButton.style.backgroundColor="gray"
    root.innerHTML += `<div id="newitem">
                        <form action="" onsubmit="handleNewProduct(event)">
                            <input type="text" name="typeName" placeholder="Enter type of item">
                            <input type="text" name="serialNo" placeholder="Enter serial number of item">
                            <input type="text" name="description" placeholder="Enter dexcription of item">
                            <input type="number" name="price" placeholder="Enter a price" >
                            <input type="text" name="currencty" placeholder="Enter currency">
                            <input type="URL" name="imageItem" placeholder="Enter URL of item image">
                            <input type="file" name="imageFile" placeholder = "Please pick the image of the item">
                            <button type="submit">SEND</button>
                        </form>
                        <p><img id="output" width="200" /></p>
                        <p><label for="file" style="cursor: pointer;" onclick="handleHidden(event)">Upload Image</label></p>`
    root.style.display="flex"                   
    root.style.flexDirection="column"
    root.style.position="absolute"
    root.style.top="250px"
    root.style.left="400px"
    root.style.border="1px solid black"
}    

    function handleNewProduct(ev){
        console.log("we are here")
        ev.preventDefault();
        const details = ev.target.elements
        for (let i = 0; i < details.length; i++) {
            if (details[i].name && details[i].value) {
            result[details[i].name] = details[i].value;
            }
        }
   
        let newProduct:product={
            name:details['typeName'],
            serialNo:details['serailNo'],
            description:details['description'],
            price:details["price"],
            currency:details['currency'],
            Pimage:details['file']
        }
        console.log(newProduct)
    }

                        // <p><img id="output" width="200" /></p>
                        // <p><label for="file" style="cursor: pointer;" onclick="handleHidden(event)">Upload Image</label></p>
                        // <div id="addItemName"></div>
                        // <div id="addItemPrice"></div>
                        // </div>
                        // <button onclick="handleDelete(event)"> delete item</button>`


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