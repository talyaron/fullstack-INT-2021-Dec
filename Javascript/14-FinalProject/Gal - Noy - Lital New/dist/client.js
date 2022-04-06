console.log("shopping ");
var htmlCart = document.querySelector(".cart");
var milk = {
    name: "milk",
    price: 6,
    description: "3% milk",
    image: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
    id: uid()
};
var bread = {
    name: "bread",
    price: 9,
    description: "white bread",
    image: "https://www.einbar.co.il/wp-content/uploads/2020/08/%D7%9C%D7%97%D7%9D-%D7%99%D7%9C%D7%93%D7%99%D7%9D-%D7%9C%D7%90%D7%AA%D7%A8.jpg",
    id: uid()
};
var butter = {
    name: "butter",
    price: 9,
    description: "the butter",
    image: "https://ynet-images1.yit.co.il/picserver5/crop_images/2020/10/04/BJF90wPID/BJF90wPID_0_530_2560_1441_0_x-large.jpg",
    id: uid()
};
var eggs = {
    name: "eggs",
    price: 21,
    description: "the eggs",
    image: "https://www.pilotonline.com/resizer/GWUDdRA6RQWXzjV54peqFmgWBJA=/fit-in/415x276/smart/filters:fill(black)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4XSQCHH6YNA4TGVDT2FKCJTNQ4.jpg",
    id: uid()
};
var tomato = {
    name: "tomato",
    price: 3,
    description: "1kg tomato",
    image: "https://s3-us-west-2.amazonaws.com/melingoimages/Images/98055.jpg",
    id: uid()
};
var cabbage = {
    name: "cabbage",
    price: 5,
    description: "1kg cabbage",
    image: "https://media.istockphoto.com/photos/green-cabbage-isolated-on-white-picture-id673162168?k=20&m=673162168&s=612x612&w=0&h=3QKF6zzzCAUL3pKxW6kVbZ7lUt1JUY_SchOUMyOHwhs=",
    id: uid()
};
var tea = {
    name: "tea",
    price: 12,
    description: "tea",
    image: "https://www.wallashops.co.il/on/demandware.static/-/Sites-wallashops-m-catalog/default/dwd19f9a45/productImages/images_from_feed/hury/9KA989DE9D/openfile_aspx_id_148684&type_png.jpg",
    id: uid()
};
var coffee = {
    name: "coffee",
    price: 15,
    description: "coffee",
    image: "https://superpharmstorage.blob.core.windows.net/hybris/products/mobile/medium/7290000176062.jpg",
    id: uid()
};
var toiletPaper = {
    name: "toilet paper",
    price: 35,
    description: "toilet paper",
    image: "https://h7z8m6j8.stackpathcdn.com/wp-content/uploads/2019/04/90-%D7%9E%D7%9E%D7%97%D7%98%D7%95%D7%AA-%D7%A4%D7%A0%D7%99%D7%9D-%D7%A7%D7%9C%D7%99%D7%A0%D7%A7%D7%A1-%D7%91%D7%95%D7%98%D7%99%D7%A7-%D7%91%D7%A7%D7%95%D7%A4%D7%A1%D7%90.jpg",
    id: uid()
};
//making an array of the products
var arrayOfProducts = [
    milk,
    bread,
    butter,
    eggs,
    tomato,
    cabbage,
    tea,
    coffee,
    toiletPaper,
];
console.log(arrayOfProducts);
var cart = [];
// //selecting the array each product will be making its own div+img+p
// //create a container for the shop
// const container = document.getElementById("containerOfProducts");
// let i: any = 0;
// for (i = 0; i < arrayOfProducts.length; i++) {
//   container.innerHTML += '<div id="product"></div>';
//     console.log(`hey${container}`)
// }
// document.body.appendChild(container);
// arrayOfProducts.forEach((product) => {
//   // Create the div
//   const newDivProduct: HTMLElement = document.createElement("div");
//   newDivProduct.setAttribute("src", `${product.image}`);
//   newDivProduct.setAttribute("width", "304");
//   newDivProduct.setAttribute("height", "228");
//   newDivProduct.setAttribute("alt", "divOfProduct");
//   newDivProduct.setAttribute("id", "divProduct");
//   newDivProduct.setAttribute("class", "imgProduct")
//   document.body.appendChild(newDivProduct);
//   // Create the add to cart btn
//   const btnAddToCart = document.createElement("button");
// //   btnAddToCart.innerText = "Add to Cart";
// //   btnAddToCart.style.color = "white";
// //   btnAddToCart.setAttribute("width", "100");
// //   btnAddToCart.setAttribute("height", "80");
// //   btnAddToCart.setAttribute("class", "btnaddToCart");
// //   //function add to cart btn
//   btnAddToCart.addEventListener("click", function (event) {
//     let addProductToCart = this.getAttribute("data-addProductToCart");
//     console.log("the product was added to cart successfully");
//   });
//   document.body.appendChild(btnAddToCart);
//   //done add to cart button
//   const done: HTMLElement = document.querySelector(".done");
//   done.setAttribute("id", "btnDone");
//   //   console.log(btnAddToCart);
//   let added = false;
//   btnAddToCart.addEventListener("click", () => {
//     if (added) {
//       btnAddToCart.style.color = "black";
//       btnAddToCart.innerHTML = "Added";
//       added = false;
//     } else {
//       added = true;
//     }
//   });
//   // Create the img of product
//   const imgProduct: HTMLImageElement = document.createElement("img");
//   //   const container1 = document.getElementById('imgProduct');
//   //   let b:any=0;
//   //   for(b = 0; i < arrayOfProducts.length; i++){
//   //    container1.innerHTML+='<div id="imgProduct"></div>';
//   //    console.log(`hey${container1}`)
//   //  }
//   imgProduct.setAttribute("src", `${product.image}`);
//   imgProduct.setAttribute("width", "250");
//   imgProduct.setAttribute("height", "200");
//   imgProduct.setAttribute("alt", "imgOfProduct");
//   document.body.appendChild(imgProduct);
//   imgProduct.setAttribute("class", "imgProduct");
// //   Create the p description of product
//   const descriptionProduct = document.createElement("p");
//   const nameOfProduct = document.createTextNode(`${product.description}`);
//   descriptionProduct.appendChild(nameOfProduct);
//   const textOfProducts = document.getElementById("divProduct");
//   textOfProducts.appendChild(descriptionProduct);
// //   const descriptionProduct:any = document.createElement("p");
// //   descriptionProduct.setAttribute("src", `${product.description}`);
// //   descriptionProduct.setAttribute("width", "250");
// //   descriptionProduct.setAttribute("height", "200");
// //   descriptionProduct.setAttribute("alt", "imgOfProduct");
// //   document.body.appendChild(descriptionProduct);
// // //   descriptionProduct.setAttribute("class", "imgProduct");
// // console.log(descriptionProduct)
//   //   console.log(newDivProduct)
//   //   console.log(btnAddToCart)
//   //   console.log(imgProduct)
//   //   console.log(descriptionProduct);
//   // render the price of product
//   const priceOfProduct = document.createElement("p");
//   const price = document.createTextNode(`${product.price}`);
//   priceOfProduct.appendChild(price);
//   const priOfProducts = document.getElementById("divProduct");
//   priOfProducts.appendChild(priceOfProduct);
//   priOfProducts.setAttribute("class", "imgProduct");
//   //   console.log(price);
// });
// //add to cart function
arrayOfProducts.forEach(function (product) {
    var btnAddToCart = document.querySelector(".addMe");
    var cont = document.querySelector(".containerOfProducts");
    var imageTitle = document.querySelector(".imageTitle");
    var products = [
        {
            src: "" + product.image,
            title: "" + product.description,
            tags: "" + product.price,
            id: "" + product.id
        },
    ];
    products.forEach(function (par) {
        cont.innerHTML += "<div class=\"parent\"><img src=\"" + par.src + "\" alt=\"" + par.title + "\"><div id=" + par.id + " class=\"overlay\"><div>" + par.title + "</div><div>" + par.tags + "\u20AA</div><button onclick=\"addMeToCart(event)\" class=\"addMe\">Add</button></div></div>";
    });
});
function addMeToCart(event) {
    var productId = event.target.parentElement.id;
    var productIndex = arrayOfProducts.findIndex(function (element) { return element.id == productId; });
    var productInCartIndex = cart.findIndex(function (element) { return element.id == productId; });
    if (productInCartIndex != -1) {
        cart[productInCartIndex].quantity++;
        console.log(cart);
    }
    else {
        var currentProduct = {
            id: productId,
            quantity: 1
        };
        cart.push(currentProduct);
        console.log(cart);
    }
}
function uid() {
    return "id-" + Math.ceil(Math.random() * 1e8);
}
// cart.forEach(function (par) {
//     htmlCart.innerHTML += `<div class="parent"><img src="${par.src}" alt="${par.title}"><div id=${par.id} class="overlay"><div>${par.title}</div><div>${par.tags}₪</div><button onclick="addMeToCart(event)" class="addMe">Add</button></div></div>`;
//   });
