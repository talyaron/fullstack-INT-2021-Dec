

const htmlCart = document.querySelector(".cart");
const totalToPay = document.querySelector(".totalToPay");

interface Product {
  name: string;
  price: number;
  description: string;
  image?: String;
  id: string;
}

interface cartProduct {
  id: string;
  quantity: number;
  price: number;
}

let milk: Product = {
  name: "milk",
  price: 6,
  description: "3% Milk",
  image: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
  id: "milk",
};
let bread: Product = {
  name: "bread",
  price: 9,
  description: "White Bread",
  image:
    "https://www.einbar.co.il/wp-content/uploads/2020/08/%D7%9C%D7%97%D7%9D-%D7%99%D7%9C%D7%93%D7%99%D7%9D-%D7%9C%D7%90%D7%AA%D7%A8.jpg",

  id: "bread",
};
let butter: Product = {
  name: "butter",
  price: 9,
  description: "Butter",
  image:
    "https://ynet-images1.yit.co.il/picserver5/crop_images/2020/10/04/BJF90wPID/BJF90wPID_0_530_2560_1441_0_x-large.jpg",
  id: "butter",
};
let eggs: Product = {
  name: "eggs",
  price: 21,
  description: "Eggs Pacage",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bII5tIeCOVPE92gwVSLi1v_-WieT9qhIsg&usqp=CAU",
  id: "eggs",
};
let tomato: Product = {
  name: "tomato",
  price: 3,
  description: "1kg Tomato",
  image: "https://s3-us-west-2.amazonaws.com/melingoimages/Images/98055.jpg",
  id: "tomato",
};

let cabbage: Product = {
  name: "cabbage",
  price: 5,
  description: "1kg Cabbage",
  image:
    "https://media.istockphoto.com/photos/green-cabbage-isolated-on-white-picture-id673162168?k=20&m=673162168&s=612x612&w=0&h=3QKF6zzzCAUL3pKxW6kVbZ7lUt1JUY_SchOUMyOHwhs=",
  id: "cabbage",
};
let tea: Product = {
  name: "tea",
  price: 12,
  description: "Tea",
  image:
    "https://www.wallashops.co.il/on/demandware.static/-/Sites-wallashops-m-catalog/default/dwd19f9a45/productImages/images_from_feed/hury/9KA989DE9D/openfile_aspx_id_148684&type_png.jpg",
  id: "tea",
};
let coffee: Product = {
  name: "coffee",
  price: 15,
  description: "Coffee",
  image:
    "https://superpharmstorage.blob.core.windows.net/hybris/products/mobile/medium/7290000176062.jpg",
  id: "coffee",
};
let toiletPaper: Product = {
  name: "toilet paper",
  price: 35,
  description: "Toilet Paper",
  image:
    "https://h7z8m6j8.stackpathcdn.com/wp-content/uploads/2019/04/90-%D7%9E%D7%9E%D7%97%D7%98%D7%95%D7%AA-%D7%A4%D7%A0%D7%99%D7%9D-%D7%A7%D7%9C%D7%99%D7%A0%D7%A7%D7%A1-%D7%91%D7%95%D7%98%D7%99%D7%A7-%D7%91%D7%A7%D7%95%D7%A4%D7%A1%D7%90.jpg",
  id: "toilet-paper",
};
//making an array of the products
const arrayOfProducts: Array<Product> = [
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


let cart: Array<cartProduct> = [];

arrayOfProducts.forEach((product) => {
  const cont = document.querySelector(".containerOfProducts");
  const imageTitle = document.querySelector(".imageTitle");
  const products = [
    {
      src: `${product.image}`,
      title: `${product.description}`,
      tags: `${product.price}`,
      id: `${product.id}`,
    },
  ];
  products.forEach(function (par) {
    cont.innerHTML += `<div class="parent"><img src="${par.src}" alt="${par.title}"><div id=${par.id}><div>${par.title}</div><div>${par.tags}₪</div><button onclick="addMeToCart(event)" class="addMe">Add</button></div></div>`;
  });
});

function addMeToCart(event) {

  event.preventDefault();
  const productId = event.target.parentElement.id;

  const productInCartIndex = cart.findIndex(
    (element) => element.id == productId
  );
  const productInProductsArrayIndex = arrayOfProducts.findIndex(
    (element) => element.id == productId
  );
  const productPrice = arrayOfProducts[productInProductsArrayIndex].price;


  if (productInCartIndex != -1) {
    cart[productInCartIndex].quantity++;
  } else {
    const currentProduct: cartProduct = {
      id: productId,
      quantity: 1,
      price: productPrice,
    };
    cart.push(currentProduct);
  }
  localStorage.removeItem("productInCart");
  cart.forEach(product => {
    setItem(product);
  });
  cartHtmlBuild();

}

function alertFunction() {
  alert("thank you for buying but we dont have payment system! :)");
  emptyCart();
}


function countCart() {
  let count = 0;

  // loop through each key/value
  for (let key in cart) {
    // increase the count
    ++count;
  }
}




function cartHtmlBuild() {
  countCart();
  let cartTotal: number = 0;
  let count = 0;
  // loop through each key/value
  for (let key in cart) {
    // increase the count
    ++count;
  }
  const htmlCartCount = document.querySelector(".num-cart-product");
  htmlCartCount.innerHTML = `${count}`;
  htmlCart.innerHTML = `<div class=”Header”><h2 class=”Heading”>Shopping Cart</h3></div><div class="quantityOfProducts"><h3 class=”Heading”> ${count} product(s) in cart</h3></div>`;
  cart.forEach((product) => {
    const currentCartProduct: Product = arrayOfProducts.find(
      (element) => element.id == product.id
    );
    let totalPayProduct: any = currentCartProduct.price * product.quantity;
    cartTotal += totalPayProduct;
    htmlCart.innerHTML += `<div class="parentProduct"><img src="${currentCartProduct.image}" alt="${currentCartProduct.description}"><div id=${currentCartProduct.id}><div><b>${currentCartProduct.name}</b></div><div>${currentCartProduct.price}₪</div><div>quantity: ${product.quantity}</div><div>Total amount: ${totalPayProduct}₪</div>`;

  });
  localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
  htmlCart.innerHTML += `<div class="total">Total: ${cartTotal}₪</div>`
  htmlCart.innerHTML += `<div class="buttonsDiv"><button class="buyButton" onclick="alertFunction()">Buy now!</button><button class="deleteButton" onclick="emptyCart()"> <img src="https://img.icons8.com/small/32/000000/filled-trash.png"/ class="deleteIcon"></button></div>`


}

function setItem(product) {

  let cartItems: any = localStorage.getItem('productInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {

    if (cartItems[product.id] == undefined) {
      cartItems = {
        ...cartItems,
        [product.id]: product
      }
    }
  } else {
    cartItems = {
      [product.id]: product
    }
  }

  localStorage.setItem("productInCart", JSON.stringify(cartItems));

}


function loadCart() {
  let storageCart = localStorage.getItem('productInCart');
  storageCart = JSON.parse(storageCart);

  if (storageCart) {
    Object.values(storageCart).map(item => {
      cart.push(item);
    })
  }
  cartHtmlBuild();
}

loadCart();

function emptyCart() {
  localStorage.removeItem('productInCart');
  cart = [];
  cartHtmlBuild();
}

