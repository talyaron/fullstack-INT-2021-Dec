const foodMenu: Array<any> = [

  {

    type: "Chicken",
    price: 30,
    img: 'imgs/pargit.jpg',
    count: 0,

  },
  {
    type: "Lamb",
    price: 35,
    img: 'imgs/ceves.jpg',
    count: 0,

  },
  {
    type: "Fries",
    price: 15,
    img: 'imgs/fries.jpg',
    count: 0,

  },
  {
    type: "Grapes",
    price: 10,
    img: 'imgs/grapeJuice.jpg',
    count: 0,

  },
];

const products: HTMLDivElement = document.querySelector(".products")

const cart: HTMLDivElement = document.querySelector(".cart");
const totalDiv: HTMLDivElement = document.querySelector(".totalDiv")

let totalPrice: number = 0;

function refreshPro() {


  for (let i = 0; i < foodMenu.length; i++) {
    products.innerHTML += `
    <div class="cube">
    ${foodMenu[i].type}
    <img src="${foodMenu[i].img}" alt="">
    <p> ${foodMenu[i].price} INS </p> 

    <button id="${i}" onclick="clickAdd(event)">Panek oti</button>
    </div>

    `
  }

}

function clickAdd(ev) {
  console.log(ev)

  foodMenu[ev.target.id].count += 1
  foodMenu[ev.target.id].sub = foodMenu[ev.target.id].count * foodMenu[ev.target.id].price
  console.log(foodMenu)
  cart.innerText = ""
  totalPrice = 0;
  order();
  totalSum();

}




function order() {

  for (let i = 0; i < foodMenu.length; i++) {

    if (foodMenu[i].count != 0) {
      cart.innerHTML +=
        `<div class="orderLine">
      <div class="productName"> ${foodMenu[i].type}: ${foodMenu[i].price} </div>
      <div class="qty">
          <div class="circleCount">Qty</div>
          <div class="minus" id="${i}" onclick="minusCount(event)">-</div>${foodMenu[i].count} <div class="plus" id="${i}"
              onclick="plusCount(event)">+</div>
      </div>
  </div>` 

    }
    else {

    }
  }

}


function totalSum() {
  for (let i = 0; i < foodMenu.length; i++) {
    totalPrice += foodMenu[i].price * foodMenu[i].count
  }
  totalDiv.innerText = `Total: ${ totalPrice } `
}

function minusCount(ev){
  console.log(ev)
  foodMenu[ev.target.attributes.id.value].count -= 1
  console.log(foodMenu)
  cart.innerText = ""
  totalPrice = 0;
  order();
  totalSum();
}
function plusCount(ev){
  console.log(ev)
  foodMenu[ev.target.attributes.id.value].count += 1
  console.log(foodMenu)
  cart.innerText = ""
  totalPrice = 0;
  order();
  totalSum();
}