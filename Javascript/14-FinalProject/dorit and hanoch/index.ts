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
let firstTime:boolean=true
let ans:boolean=false
let fileinput:string = ""
let render:HTMLDivElement=document.querySelector("#render")
const myButton: HTMLElement = document.querySelector("#button2")
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
                                <button id="exitButton" onclick="backToManager(event)">Back To Manager Page</button>
                            </div>`
        //<a href="index1.html">back to manager page</a> 
        newitem = document.querySelector("#newitem")
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
                fileinput = URL.createObjectURL(result["imageFile"])
                //displayPic()
            }
            else {
                result[details[i].name] = details[i].value;
            }
        }
      
    }
     fileinput = URL.createObjectURL(result["imageFile"])
     output = document.querySelector("#output")
     console.log(output.style.opacity)
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
    productsArr.push(newProduct)
    console.dir(productsArr)
    ev.target.reset()
    renderProducts()

    //ans = handleDirection('managerAddProduct')
}

function renderProducts(){
        render=document.querySelector("#render")
        let html = '';
        productsArr.forEach(product=>{
           html+=
            `<div class="test" >
                <img src=${product.pImage} width="100px">
                <div class="test2" >
                      <div>name:${product.name}</div>  
                      <div>serialNo:${product.serialNo}</div>
                      <div>description: ${product.description}</div>
                      <div>price: ${product.price}</div>
                      <div>currency: ${product.currency}</div>
                      <button class="button">delete</button>
                      <button class="button">update</button>
                </div>
            </div>`
        })
    
        render.innerHTML = html;
        render.style.position="absolute"
        render.style.top="250px"
        render.style.left="700px"
        render.style.border= "1px solid black"
}


function backToManager(ev){
    console.log(render)
    alert("Products added")
    output.remove()
    newitem.remove()
    render.remove()
    myButton.style.backgroundColor = "rgb(172, 143, 161)"
    window.location.href = "index1.html"
}


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