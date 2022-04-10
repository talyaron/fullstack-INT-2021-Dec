var foodMenu = [
    {
        type: "Pargit",
        price: 30,
        img: 'imgs/pargit.jpg',
        count: 0,
        sub: 0
    },
    {
        type: "Ceves",
        price: 35,
        img: 'imgs/ceves.jpg',
        count: 0,
        sub: 0
    },
    {
        type: "Chips",
        price: 15,
        img: 'imgs/fries.jpg',
        count: 0,
        sub: 0
    },
    {
        type: "Grapes",
        price: 10,
        img: 'imgs/grapeJuice.jpg',
        count: 0,
        sub: 0
    },
];
var products = document.querySelector(".products");
var cart = document.querySelector(".cart");
var total = 0;
function refreshPro() {
    for (var i = 0; i < foodMenu.length; i++) {
        products.innerHTML += "\n    <div class=\"cube\">\n    " + foodMenu[i].type + "\n    <img src=\"" + foodMenu[i].img + "\" alt=\"\">\n    " + foodMenu[i].price + " \u20AA\n    <button id=\"" + i + "\" onclick=\"clickAdd(event)\">Panek Oti</button>\n    </div>\n\n    ";
    }
}
function clickAdd(ev) {
    console.log(ev);
    foodMenu[ev.target.id].count += 1;
    foodMenu[ev.target.id].sub = foodMenu[ev.target.id].count * foodMenu[ev.target.id].price;
    console.log(foodMenu);
    cart.innerText = "";
    total = 0;
    totalSum();
    order();
}
function order() {
    for (var i = 0; i < foodMenu.length; i++) {
        if (foodMenu[i].count != 0) {
            cart.innerText += " " + foodMenu[i].type + " : " + foodMenu[i].count + "  " + foodMenu[i].price * foodMenu[i].count + " \u20AA\n " + total + " ";
        }
        else {
        }
    }
}
order();
function totalSum() {
    for (var i = 0; i < foodMenu.length; i++) {
        total += foodMenu[i].sub;
    }
}
