var foodMenu = [
    {
        type: "פרגית",
        price: 30,
        img: 'imgs/pargit.jpg',
        count: 0
    },
    {
        type: "כבש",
        price: 35,
        img: 'imgs/ceves.jpg',
        count: 0
    },
    {
        type: "צ'יפס",
        price: 15,
        img: 'imgs/fries.jpg',
        count: 0
    },
    {
        type: "ענבים",
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
        products.innerHTML += "\n    <div class=\"cube\">\n    " + foodMenu[i].type + "\n    <img src=\"" + foodMenu[i].img + "\" alt=\"\">\n    " + foodMenu[i].price + " \u20AA\n    <button id=\"" + i + "\" onclick=\"clickAdd(event)\">\u05E4\u05E0\u05E7 \u05D0\u05D5\u05EA\u05D9</button>\n    </div>\n\n    ";
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
                "<div class=\"orderLine\">" + foodMenu[i].type + " : " + foodMenu[i].price + "\u20AA \n       <div class=\"circleCount\">\u05DB\u05DE\u05D5\u05EA:" + foodMenu[i].count + "</div>  <div class=\"plus\" onclick=\"plusCount(event)\">+</div></div>";
        }
        else {
        }
    }
}
function totalSum() {
    for (var i = 0; i < foodMenu.length; i++) {
        totalPrice += foodMenu[i].price * foodMenu[i].count;
    }
    totalDiv.innerText = "\u05E1\u05D4\"\u05DB : " + totalPrice + "\u20AA";
}
