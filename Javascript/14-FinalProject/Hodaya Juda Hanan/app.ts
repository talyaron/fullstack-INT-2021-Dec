const foodMenu: Array<any> = [
 
  {

    type: "Pargit",
    price: 30,
    img: 'imgs/pargit.jpg',
    count: 0,
    sub: 0,
  },
  {
    type: "Ceves",
    price: 35,
    img: 'imgs/ceves.jpg',
    count: 0,
    sub: 0,
  },
  {
    type: "Chips",
    price: 15,
    img: 'imgs/fries.jpg',
    count: 0,
    sub: 0,
  },
  {
    type: "Grapes",
    price: 10,
    img: 'imgs/grapeJuice.jpg',
    count: 0,
    sub: 0,
  },
];

const products: HTMLDivElement = document.querySelector(".products")

const cart: HTMLDivElement = document.querySelector(".cart");
let total:number = 0

function refreshPro() {


  for (let i = 0; i < foodMenu.length; i++) {
    products.innerHTML += `
    <div class="cube">
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
  foodMenu[ev.target.id].sub = foodMenu[ev.target.id].count*foodMenu[ev.target.id].price
  console.log(foodMenu)
  cart.innerText = ""
  total=0
 
  
  totalSum()
  order();
}




function order() {

  for (let i = 0; i < foodMenu.length; i++) {
   
    if (foodMenu[i].count != 0) {
      cart.innerText += ` ${foodMenu[i].type} : ${foodMenu[i].count}  ${foodMenu[i].price*foodMenu[i].count} ₪\n ${total} `
        

    }
    else {

    }
  }

}


order()

function totalSum(){
  for (let i = 0; i < foodMenu.length; i++) {
  total += foodMenu[i].sub 
  
  
  

  }
  
}
