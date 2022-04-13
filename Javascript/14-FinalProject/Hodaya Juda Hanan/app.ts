const foodMenu: Array<any> = [

  {

    type: "פרגית",
    price: 30,
    img: 'imgs/pargit.jpg',
    count: 0,

  },
  {
    type: "כבש",
    price: 35,
    img: 'imgs/ceves.jpg',
    count: 0,

  },
  {
    type: "צ'יפס",
    price: 15,
    img: 'imgs/fries.jpg',
    count: 0,

  },
  {
    type: "ענבים",
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
    ${foodMenu[i].price} ₪
    <button id="${i}" onclick="clickAdd(event)">פנק אותי</button>
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
       `<div class="orderLine">${foodMenu[i].type} : ${foodMenu[i].price}₪ 
       <div class="circleCount">כמות:${foodMenu[i].count}</div>  <div class="plus" onclick="plusCount(event)">+</div></div>`

    }
    else {

    }
  }

}


function totalSum() {
  for (let i = 0; i < foodMenu.length; i++) {
    totalPrice += foodMenu[i].price * foodMenu[i].count
  }
  totalDiv.innerText = `סה"כ : ${totalPrice}₪`
}
