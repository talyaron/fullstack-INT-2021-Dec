const foodMenu: Array<any> = [

  {

    type: "Pargit",
    price: 30,
    img: 'imgs/pargit.jpg',
    count: 0,
  },
  {
    type: "Ceves",
    price: 35,
    img: 'imgs/ceves.jpg',
    count: 0,
  },
  {
    type: "Chips",
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

function refreshPro() {


  for (let i = 0; i < foodMenu.length; i++) {
    products.innerHTML += `
    <div class="html${foodMenu[i].type}">
    ${foodMenu[i].type}
    <img src="${foodMenu[i].img}" alt="">
    ${foodMenu[i].price} ₪
    <button id="${i}" onclick="clickAdd(event)">Panek Oti</button>
    </div>

    `
  }

}

function clickAdd(ev) {
  console.log(ev)

  foodMenu[ev.target.id].count += 1
  console.log(foodMenu)
  cart.innerText = ""
order();

}



function order() {


  for (let i = 0; i < foodMenu.length; i++) {
   cart.innerText += `\n ${foodMenu[i].type} : ${foodMenu[i].count}`
  }

}

order()

