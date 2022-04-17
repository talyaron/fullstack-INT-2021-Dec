interface users {
    name: string,
    username: string,
    password: string,
    address?: string,
    telephon?: number,
    email?: URL
}
interface product {
    name: string,
    serialNo: string,
    description: string,
    price: number,
    currency: string,
    pImage?:URL
}
interface productR{
    name: string,
    serialNo: string,
    description: string,
    price: number,
    currency: string,
    pImage?:URL
}
let result = {};
let stringStorage:string = ""
let productsArr:Array<product> = []
let productsArrFLS:Array<product> = []
let productsCart:Array<product> = []
let output:HTMLImageElement=document.querySelector("#output")
let fileName:string = ''
let root: HTMLElement = document.querySelector("#root")
let contOrBack:HTMLDivElement=document.querySelector("#contOrBack")
let newitem:HTMLElement=document.querySelector("#newitem")
let firstTime:boolean=true
let ans:boolean=false
let fileinput:Blob = new Blob
let html:string = ""
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
    }else{
        window.location.href = "client.html"
    }
} 

function handleNew(ev) {
        window.localStorage.clear()
        myButton.style.backgroundColor = "gray"
        root.innerHTML = `<div id="newitem">
                                <p>Please type details</>
                                <form action="" onsubmit="handleNewProduct(event)">
                                    <input type="text" name="typeName" placeholder="Enter type of item">
                                    <input type="text" name="description" placeholder="Enter description of item">
                                    <input type="number" name="price" placeholder="Enter a price" >
                                    <input type="text" name="currency" placeholder="Enter currency">
                                    <input type="URL" name="imageFile" placeholder = "Please type the url of the image">
                                    <button type="submit">SEND</button> 
                                </form>
                                <img id="output" width="100px"/>
                                <button id="exitButton" onclick="backToManager(event)">Back To Manager Page</button>
                            </div>`
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
    ev.preventDefault();
    const details = ev.target.elements
    for (let i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
                 result[details[i].name] = details[i].value;
            }
        }
    result["serialNo"]=uID()
    let newProduct:product= {
        name: result['typeName'],
        serialNo: result['serialNo'],
        description: result['description'],
        price: result["price"],
        currency: result['currency'],
        pImage : result["imageFile"]
    }
    window.localStorage.setItem(result['serialNo'], JSON.stringify(newProduct));
    productsArr.push(newProduct)
    renderProducts(newProduct)
    //localStorage.setItem("productsArr", JSON.stringify(productsArr))
    ev.target.reset()

}
function uID(){
    return Date.now().toString(36)+Math.random().toString(36).substring(2)
}


function renderProducts(newProduct){
    console.log("we are at renderProducts")
    render=document.querySelector("#render")
    //let fileurl:URL = URL.createObjectURL(result["imageFile"])
    html=`<div class="bigDiv" id="${newProduct.serialNo}">
            <img src=${newProduct.pImage} width="100px">
            <div class="productDiv" >
                <div>name:${newProduct.name}</div>  
                <div>serialNo:${newProduct.serialNo}</div>
                <div>description: ${newProduct.description}</div>
                <div>price: ${newProduct.price}</div>
                <div>currency: ${newProduct.currency}</div>
                <button class="button" onclick = handleDelete(event,"${newProduct.serialNo}")>Delete product</button>
                <button class="button" onclick = handleUpdate(event,"${newProduct.serialNo}")>Update product</button>
            </div>
        </div>`
    //console.log(`html:${html}`)    
    render.innerHTML+=html
    render.style.position="absolute"
    render.style.top="250px"
    render.style.left="700px"
}

function backToManager(ev){
    //saveNewProducts()
    //console.log(`render before remove  ${render}`)
    alert("Products added")
    output.remove()
    newitem.remove()
    render.remove()
    //console.log(`render after remove  ${render}`)
    myButton.style.backgroundColor = "rgb(172, 143, 161)"
    window.location.href = "index1.html"
}

function presentItem(ev){
     
    let products:HTMLDivElement=document.querySelector("#products")
        for (let i:number = 0;i<window.localStorage.length;i++) {
            stringStorage = window.localStorage.key(i)
            const ourString:string = window.localStorage.getItem(`${stringStorage}`)
            productsArrFLS.push(JSON.parse(ourString))
        };
        let html:string = '';
        productsArrFLS.forEach(product=>{
            const serial:string = product.serialNo
            html+=
            `<div class="page">
                <div class="wrapper">
                    <div class="item">
                            <img src=${product.pImage} width="100px" onclick='handlePurchase(event,"${serial}")> 
                            <div class="upload">
                                <div onclick='handlePurchase(event,"${serial}")'>name:${product.name}</div>  
                                <div onclick='handlePurchase(event,"${serial}")'>serialNo:${product.serialNo}</div>
                                <div onclick='handlePurchase(event,"${serial}")'>description: ${product.description}</div>
                                <div onclick='handlePurchase(event,"${serial}")'>price: ${product.price}</div>
                                <div onclick='handlePurchase(event,"${serial}")'>currency: ${product.currency}</div>
                                
                            </div>
                            
                    </div>
                    <button onclick="moveToPayment(event)">shopping basket</button>
                </div>
            </div>`
        })
        console.log(`html ${html}`)
        products.innerHTML = html;
         
}
function handlePurchase(ev,serialNo){
  console.log("handle purchase")
  console.dir(ev)
  console.dir(serialNo)
    
    let cart1:string = window.localStorage.getItem(serialNo)
    let cart2:Array<product> = [] //JSON.parse(cart1)
    productsCart.push(JSON.parse(cart1))

    //const pro = ev.target.parentElement.innerText
    
    cart2.push(JSON.parse(cart1))
    console.log(cart2)
    localStorage.setItem("cart", JSON.stringify(productsCart))
    console.log(productsCart)
}
let p = ''
function payment(){
   console.log(localStorage.cart)
   const pay = JSON.parse(localStorage.cart)
   pay.forEach(item=>{
        p += 
       `<div class="item1">
                            <img src=${item.pImage} width="100px"> 
                            <div>
                                <div>name:${item.name}</div>  
                                <div>serialNo:${item.serialNo}</div>
                                <div>description: ${item.description}</div>
                                <div>price: ${item.price}</div>
                                <div>currency: ${item.currency}</div>
                                
                            </div>
                            
                    </div>`
                })
                   
                    document.body.innerHTML = p
                    document.body.innerHTML += `<br> <br> <img src="cart.png" width = 20px>  <p> you got ${pay.length} items'</p>`
                
                }
   
   
function moveToPayment(){
    window.location.href = "cliant1.html"
}

function handleUpdate(ev,serialNo){
    console.log("handleUpdate")
    console.log(serialNo)
    const Prodstring:string = localStorage.getItem(serialNo);
    let prodToUpd:product = JSON.parse(Prodstring)
    let updRnd:HTMLDivElement = document.querySelector("#updRnd")
    try{
    html=`<div id="itemUpd">
    <p>Please update details<p/>
    <form action="" onsubmit="updateItems(event,"${prodToUpd.serialNo}")">
        <input type="text" name="typeName" value="${prodToUpd.name}">
        <input type="text" name="description" value="${prodToUpd.description}">
        <input type="number" name="price" value="${prodToUpd.price}" >
        <input type="text" name="currency" value="${prodToUpd.currency}">
        <button type="submit">SEND</button> 
    </form>
    <img id="output" src="${prodToUpd.pImage}" width="100px"/>
    </div>`
updRnd.innerHTML=html
updRnd.style.display = "flex"
updRnd.style.flexDirection = "column"
updRnd.style.position = "absolute"
updRnd.style.top = "200px"
updRnd.style.left = "400px"
updRnd.style.backgroundColor="blue"
output.style.position="absolute"
output.style.top = "50px"
output.style.left="350px"
} catch (err) {
    console.error(err);
  }
}
function handleDelete(ev,serialNo){
    console.log("handleDelete")
    console.log(serialNo)
    localStorage.removeItem(serialNo)
    let toDel=document.querySelector(`#${serialNo}`)
    toDel.remove()
}

function deleteItems(ev){
    let products:HTMLDivElement=document.querySelector("#render")
    for (let i:number = 0;i<window.localStorage.length;i++) {
        stringStorage = window.localStorage.key(i)
        const ourString:string = window.localStorage.getItem(`${stringStorage}`)
        productsArrFLS.push(JSON.parse(ourString))
    };
    let html:string = '';
    productsArrFLS.forEach(product=>{
        const serial:string = product.serialNo
        html+=
        `<div class="page" id="${product.serialNo}">
            <div class="wrapper">
                <div class="item">
                        <img src=${product.pImage} width="100px")> 
                        <div class="upload">
                            <div>name:${product.name}</div>  
                            <div>serialNo:${product.serialNo}</div>
                            <div>description: ${product.description}</div>
                            <div>price: ${product.price}</div>
                            <div>currency: ${product.currency}</div>
                            <button class="button" onclick = handleDelete(event,"${Product.serialNo}")>Delete product</button>
                        </div>
                </div>
            </div>
        </div>`
    })
    console.log(`html ${html}`)
    render.innerHTML = html;
}

function updateItems(ev,serialNo){
    console.log("updateItems")
    ev.preventDefault();
    const details = ev.target.elements
    console.log(`details of this ${details}`)
    for (let i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
                 result[details[i].name] = details[i].value;
            }
        }
    result["serialNo"]=serialNo
    console.log(`result: ${result}`)
    let newProduct:product= {
        name: result['typeName'],
        serialNo: result['serialNo'],
        description: result['description'],
        price: result["price"],
        currency: result['currency'],
        pImage : result["imageFile"]
    }
    console.log(`newProduct: ${newProduct}`)
    window.localStorage.removeItem(serialNo)
    window.localStorage.setItem(result['serialNo'], JSON.stringify(newProduct));
    console.log("to renderProducts")
    renderProducts(newProduct)
    //localStorage.setItem("productsArr", JSON.stringify(productsArr))
    // let updRnd:HTMLDivElement = document.querySelector("#itemUpd")
    // updRnd.remove()
}










