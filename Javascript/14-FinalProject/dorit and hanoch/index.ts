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
        console.log(window.localStorage)
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
            
            // if (details[i].name == "imageFile") {
            //     //result['imageFile'] = details['imageFile'].files[0]
            //     //fileinput = URL.createObjectURL(result["imageFile"])
            //     result["imageFile"] = details['imageFile']
            //     //fileinput=result["imageFile"]["name"]
            // }
           // else {
                result[details[i].name] = details[i].value;
            }
        }
    console.log(`result.imageFile: ${result['imageFile']}`)    
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
    render=document.querySelector("#render")
    //let fileurl:URL = URL.createObjectURL(result["imageFile"])
    html+=`<div class="bigDiv" >
            <img src=${newProduct.pImage} width="100px">
            <div class="productDiv" >
                <div>name:${newProduct.name}</div>  
                <div>serialNo:${newProduct.serialNo}</div>
                <div>description: ${newProduct.description}</div>
                <div>price: ${newProduct.price}</div>
                <div>currency: ${newProduct.currency}</div>
                <button class="button">delete</button>
                <button class="button">update</button>
            </div>
        </div>`
    console.log(`html: ${html}`)
    render.innerHTML=html
    render.style.position="absolute"
    render.style.top="250px"
    render.style.left="700px"
}


function renderSavedProducts(){
        let products:HTMLDivElement=document.querySelector("#products")
        for (let i:number = 0;i<window.localStorage.length;i++) {
            stringStorage = window.localStorage.key(i)
            console.log(`the storage: ${stringStorage}`)
            const ourString:string = window.localStorage.getItem(`${stringStorage}`)
            console.log(`ourString:${ourString}`)
            productsArrFLS.push(JSON.parse(ourString))
            console.log(productsArrFLS)
        };
        let html = '';
         productsArrFLS.forEach(product=>{
        //    html+=
        //     `<div class="bigDiv" >
        //         <img src=${product.pImage} width="100px">
        //         <div class="productDiv" >
        //               <div>name:${product.name}</div>  
        //               <div>serialNo:${product.serialNo}</div>
        //               <div>description: ${product.description}</div>
        //               <div>price: ${product.price}</div>
        //               <div>currency: ${product.currency}</div>
        //         </div>
        //     </div>`
            html+=
            `<div class="wrapper">
                <div class="item">
                        <img src=${product.pImage} width="100px"> 
                        <div class="upload">
                            <div>name:${product.name}</div>  
                            <div>serialNo:${product.serialNo}</div>
                            <div>description: ${product.description}</div>
                            <div>price: ${product.price}</div>
                            <div>currency: ${product.currency}</div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
            </div>`        

        })
    
        products.innerHTML = html;
        // render.style.position="absolute"
        // render.style.top="250px"
        // render.style.left="700px"
        //render.style.border= "1px solid black"
}


function backToManager(ev){
    //saveNewProducts()
    console.log(`render before remove  ${render}`)
    alert("Products added")
    output.remove()
    newitem.remove()
    render.remove()
    console.log(`render after remove  ${render}`)
    myButton.style.backgroundColor = "rgb(172, 143, 161)"
    window.location.href = "index1.html"
}

function presentItem(ev){
     
    // const cliant:any = document.querySelector("#cliant")
    // const storedArr:Array<string> = JSON.parse(localStorage.getItem("productsArr"))
    //console.log(storedArr)
    console.log("we are in presentItem")
    let products:HTMLDivElement=document.querySelector("#products")
        for (let i:number = 0;i<window.localStorage.length;i++) {
            stringStorage = window.localStorage.key(i)
            const ourString:string = window.localStorage.getItem(`${stringStorage}`)
            console.log(`ourString:${ourString}`)
            productsArrFLS.push(JSON.parse(ourString))
            console.log(` productsArrFLS ${productsArrFLS}`)
        };
        let html:string = '';
        productsArrFLS.forEach(product=>{
            console.log(`pImage = ${product.pImage}`)
            const serial:string = product.serialNo
            html+=
            `<div class="page">
                <div class="wrapper">
                    <div class="item">
                            <img src=${product.pImage} width="100px"> 
                            <div class="upload">
                                <div onclick='handlePurchase(event,"${serial}")'>name:${product.name}</div>  
                                <div onclick='handlePurchase(event,"${serial}")'>serialNo:${product.serialNo}</div>
                                <div onclick='handlePurchase(event,"${serial}")'>description: ${product.description}</div>
                                <div onclick='handlePurchase(event,"${serial}")'>price: ${product.price}</div>
                                <div onclick='handlePurchase(event,"${serial}")'>currency: ${product.currency}</div>
                                <button onclick="moveToPayment(event)">shoping basket</button>
                            </div>
                    </div>
                </div>
            </div>`
        })
        //console.log(`html ${html}`)
        products.innerHTML = html;
        //console.dir(products)

    // console.log(storedArr)
    //     let html = '';
    //     storedArr.forEach(product=>{
    //        html+=
    //         `<div class="display" >
    //             <img src=${product.pImage} width="100px">
    //             <div class="test2" >
    //                   <div>name:${product.name}</div>  
    //                   <div>serialNo:${product.serialNo}</div>
    //                   <div>description: ${product.description}</div>
    //                   <div>price: ${product.price}</div>
    //                   <div>currency: ${product.currency}</div>
                     
    //             </div>
    //         </div>`
    //     })
        
    //     cliant.innerHTML = html;
    //     cliant.style.display ="flex"
        
        
}
function handlePurchase(ev,serialNo){
    console.log("handle purchase")
  
    let cart:Array<product>=[]
    let productn:string = window.localStorage.getItem(`${serialNo}`)
    let productB:product = JSON.parse(productn)
    cart.push(productB)
    console.log(cart)
    let html:string = `div class="cart"`
    localStorage.setItem("cart", JSON.stringify(cart))

}
function payment(){
    JSON.parse(localStorage.cart)
}
function moveToPayment(){
    window.location.href = "cliant1.html"
}









