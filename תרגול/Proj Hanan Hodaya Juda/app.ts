const foodMenu = [

  {

    type: "pargit",
    price: 30,
    img: `imgs/pargit.jpg`,
  },
  {
    type: "ceves",
    price: 35,
    img: 'imgs/ceves.jpg',
  },
  {
    type: "chips",
    price: 15,
    img: 'imgs/fries.jpg',
  },
  {
    type: "anavim",
    price: 30,
    img: `imgs/grape-juice-the-israelis.jpg`,
  },
];
const products: any = document.querySelector(".products")

function refreshPro() {
  let html =
    `<h2>product: ${foodMenu[0].type}<h2>
  <h2>price: ${foodMenu[0].price}<h2>
  <img src=${foodMenu[0].img}>
  <h2>product: ${foodMenu[1].type}<h2>
  <h2>price: ${foodMenu[1].price}<h2>
  <img src=${foodMenu[1].img}>
  <h2>product: ${foodMenu[2].type}<h2>
  <h2>price: ${foodMenu[2].price}<h2>
  <img src=${foodMenu[2].img}>
  <h2>product: ${foodMenu[3].type}<h2>
  <h2>price: ${foodMenu[3].price}<h2>
  <img src=${foodMenu[3].img}>`;
  products.innerHTML = html
  
};

function styleTheWeb(){








};