const foodMenu = [

  {

    type: "פרגית",
    price: 30,
    img: `imgs/pargit.jpg`,
  },
  {
    type: "כבש",
    price: 35,
    img: 'imgs/ceves.jpg',
  },
  {
    type: "צ'יפס",
    price: 15,
    img: 'imgs/fries.jpg',
  },
  {
    type: "ענבים",
    price: 30,
    img: `imgs/grape-juice-the-israelis.jpg`,
  },
];
const products: any = document.querySelector(".products")

function refreshPro() {
  let html =
    `<h2>${foodMenu[0].type}<h2>
  <h2>מחיר: ${foodMenu[0].price}<h2>
  <img src=${foodMenu[0].img}>
  <h2>${foodMenu[1].type}<h2>
  <h2>מחיר: ${foodMenu[1].price}<h2>
  <img src=${foodMenu[1].img}>
  <h2> ${foodMenu[2].type}<h2>
  <h2>מחיר: ${foodMenu[2].price}<h2>
  <img src=${foodMenu[2].img}>
  <h2>${foodMenu[3].type}<h2>
  <h2>מחיר: ${foodMenu[3].price}<h2>
  <img src=${foodMenu[3].img}>`;
  products.innerHTML = html
  
  
};

