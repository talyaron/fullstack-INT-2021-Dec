var foodMenu = [
    {
        type: "Chicken",
        price: 30,
        img: 'imgs/pargit.jpg',
        count: 0
    },
    {
        type: "Lamb",
        price: 35,
        img: 'imgs/ceves.jpg',
        count: 0
    },
    {
        type: "Fries",
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
var totalDiv = document.querySelector(".totalDiv");
var totalPrice = 0;
function refreshPro() {
    for (var i = 0; i < foodMenu.length; i++) {
        products.innerHTML += "\n    <div class=\"cube\">\n    " + foodMenu[i].type + "\n    <img src=\"" + foodMenu[i].img + "\" alt=\"\">\n    <p> " + foodMenu[i].price + " INS </p> \n\n    <button id=\"" + i + "\" onclick=\"clickAdd(event)\">Panek oti</button>\n    </div>\n\n    ";
    }
}
function clickAdd(ev) {
    console.log(ev);
    foodMenu[ev.target.id].count += 1;
    foodMenu[ev.target.id].sub = foodMenu[ev.target.id].count * foodMenu[ev.target.id].price;
    console.log(foodMenu);
    cart.innerText = "";
    totalPrice = 0;
    order();
    totalSum();
}
function order() {
    for (var i = 0; i < foodMenu.length; i++) {
        if (foodMenu[i].count != 0) {
            cart.innerHTML +=
                "<div class=\"orderLine\">\n      <div class=\"productName\"> " + foodMenu[i].type + ": " + foodMenu[i].price + " </div>\n      <div class=\"qty\">\n          <div class=\"circleCount\">Qty</div>\n          <div class=\"minus\" id=\"" + i + "\" onclick=\"minusCount(event)\">-</div>" + foodMenu[i].count + " <div class=\"plus\" id=\"" + i + "\"\n              onclick=\"plusCount(event)\">+</div>\n      </div>\n  </div>";
        }
        else {
        }
    }
}
function totalSum() {
    for (var i = 0; i < foodMenu.length; i++) {
        totalPrice += foodMenu[i].price * foodMenu[i].count;
    }
    totalDiv.innerText = "Total: " + totalPrice + " ";
}
function minusCount(ev) {
    console.log(ev);
    foodMenu[ev.target.attributes.id.value].count -= 1;
    console.log(foodMenu);
    cart.innerText = "";
    totalPrice = 0;
    order();
    totalSum();
}
function plusCount(ev) {
    console.log(ev);
    foodMenu[ev.target.attributes.id.value].count += 1;
    console.log(foodMenu);
    cart.innerText = "";
    totalPrice = 0;
    order();
    totalSum();
}
