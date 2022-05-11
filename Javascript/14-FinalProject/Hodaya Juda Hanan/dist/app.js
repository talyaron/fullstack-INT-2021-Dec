var foodMenu = [
    {
        type: "Pargit",
        price: 30,
        img: 'imgs/pargit.jpg',
        count: 0
    },
    {
        type: "Ceves",
        price: 35,
        img: 'imgs/ceves.jpg',
        count: 0
    },
    {
        type: "Chips",
        price: 15,
        img: 'imgs/fries.jpg',
        count: 0
    },
    {
        type: "Grapes",
        price: 10,
        img: 'imgs/grapeJuice.jpg',
        count: 0
    },
];
var products = document.querySelector(".products");
var cart = document.querySelector(".cart");
function refreshPro() {
    for (var i = 0; i < foodMenu.length; i++) {
        products.innerHTML += "\n    <div class=\"html" + foodMenu[i].type + "\">\n    " + foodMenu[i].type + "\n    <img src=\"" + foodMenu[i].img + "\" alt=\"\">\n    " + foodMenu[i].price + " \u20AA\n    <button id=\"" + i + "\" onclick=\"clickAdd(event)\">Panek Oti</button>\n    </div>\n\n    ";
    }
}
function clickAdd(ev) {
    console.log(ev);
    foodMenu[ev.target.id].count += 1;
    console.log(foodMenu);
    cart.innerText = "";
    order();
}
function order() {
    for (var i = 0; i < foodMenu.length; i++) {
        cart.innerText += "\n " + foodMenu[i].type + " : " + foodMenu[i].count;
    }
}
order();
