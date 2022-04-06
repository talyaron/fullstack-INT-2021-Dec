interface users {
    name: string,
    username: string,
    password: string,
    address?: string,
    telephon?: number,
    email?: string
}
interface product {
    name: string,
    serialNo: string,
    description: string,
    price: number,
    currency: string,
    pImage?:string,
}

let result = {};
let productsArr:Array<product> = []
let output:HTMLImageElement=document.querySelector("#output")
let fileName:string = ''
let root: HTMLElement = document.querySelector("#root")
let contOrBack:HTMLDivElement=document.querySelector("#contOrBack")
let newitem:HTMLElement=document.querySelector("#newitem")
const manager: users = {
    name: "Tal Yaron",
    username: "tal",
    password: "1234"
}

function handleUser(ev) {
    ev.preventDefault();
    const details = ev.target.elements
    for (let i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
            result[details[i].name] = details[i].value;
        }
    }
    if (result['name'] == manager['name'] && result['pass'] == manager['password']) {
        window.location.href = "index1.html"
    }
}

function handleNew(ev) {

    
    const myButton: HTMLElement = document.querySelector("#button2")
    myButton.style.backgroundColor = "gray"
    root.innerHTML += `<div id="newitem">
                            <p>Please type details</>
                            <form action="" onsubmit="handleNewProduct(event)">
                                <input type="text" name="typeName" placeholder="Enter type of item">
                                <input type="text" name="serialNo" placeholder="Enter serial number of item">
                                <input type="text" name="description" placeholder="Enter description of item">
                                <input type="number" name="price" placeholder="Enter a price" >
                                <input type="text" name="currency" placeholder="Enter currency">
                                <input type="file" name="imageFile" placeholder = "Please pick the image of the item">
                                <button type="submit">SEND</button>
                            </form>
                            <img id="output" width="100px"/>
                        </div>`
                        

    let newitem: HTMLDivElement = document.querySelector("#newitem")
    newitem.style.display = "flex"
    newitem.style.flexDirection = "column"
    newitem.style.position = "absolute"
    newitem.style.top = "200px"
    newitem.style.left = "400px"
    output = document.querySelector("#output")
    output.style.position="absolute"
    output.style.top = "50px"
    output.style.left="350px"
}

function handleNewProduct(ev) {
    console.log("we are here")
    ev.preventDefault();
    const details = ev.target.elements
    for (let i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
            if (details[i].name == "imageFile") {
                result['imageFile'] = details['imageFile'].files[0]
            }
            else {
                result[details[i].name] = details[i].value;
            }
        }
      
    }

    let fileinput:string = URL.createObjectURL(result["imageFile"])
    output.src = fileinput
    //console.log(typeof fileinput)
    let newProduct: product = {
        name: result['typeName'],
        serialNo: result['serialNo'],
        description: result['description'],
        price: result["price"],
        currency: result['currency'],
        pImage : fileinput
    }
    // console.log(`newProduct of typeName: ${newProduct['name']}`)
    // console.log(`newProduct of serialNo: ${newProduct['serialNo']}`)
    // console.log(`newProduct of description: ${newProduct['description']}`)
    // console.log(`newProduct of price: ${newProduct['price']}`)
    // console.log(`newProduct of currency: ${newProduct['currency']}`)
    // console.log(`newProduct of imgFile: ${newProduct['pImage']}`)
    //console.log(`newProduct ${newProduct}`)
    productsArr.push(newProduct)
    handleDirection('managerAddProduct')
 
}
function handleDirection(action:string){
    if (action=='managerAddProduct'){
        newitem.remove()
        root.innerHTML+=
        `<div id="contOrBack">
        <h2>new product created</h2>
        <button id="back" onclick =window.location.href = "index1.html">back to manager tasks</button>
        <button id="cont" onclick="handleNew(event)">Add another Items</button> 
        </div>`
        contOrBack = document.querySelector("#contOrBack")
        contOrBack.style.top = "600px"
        contOrBack.style.left = "400px"
    }
}

// <p><img id="output" width="200" /></p>
// <p><label for="file" style="cursor: pointer;" onclick="handleHidden(event)">Upload Image</label></p>
// <div id="addItemName"></div>
// <div id="addItemPrice"></div>
// </div>
// <button onclick="handleDelete(event)"> delete item</button>`


var loadImg = function (event) {
    var image: any = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
}
function handleHidden(ev) {
    ev.target.hidden = true
}
function handleItem1(ev) {
    console.log(ev)
    const content = ev.target.value
    const div = document.querySelector("#addItemName")
    div.innerHTML = `<p>${content}</p>`
    ev.target.hidden = true

}
function handleItem0(ev) {
    console.log(ev)
    const content = ev.target.value
    const div = document.querySelector("#addItemPrice")
    div.innerHTML = `<p>${content} ש"ח</p>`
    ev.target.hidden = true


}
function handleDelete(ev) {
    const catchItem = document.querySelector("#newitem")
    console.log(catchItem)
    catchItem.innerHTML = ""
    ev.target.hidden = true
}