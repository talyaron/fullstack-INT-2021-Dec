var foodMenu = [
    {
        type: "פרגית",
        price: 30,
        img: "imgs/pargit.jpg"
    },
    {
        type: "כבש",
        price: 35,
        img: 'imgs/ceves.jpg'
    },
    {
        type: "צ'יפס",
        price: 15,
        img: 'imgs/fries.jpg'
    },
    {
        type: "ענבים",
        price: 30,
        img: "imgs/grape-juice-the-israelis.jpg"
    },
];
var products = document.querySelector(".products");
function refreshPro() {
    var html = "<h2>" + foodMenu[0].type + "<h2>\n  <h2>\u05DE\u05D7\u05D9\u05E8: " + foodMenu[0].price + "<h2>\n  <img src=" + foodMenu[0].img + ">\n  <h2>" + foodMenu[1].type + "<h2>\n  <h2>\u05DE\u05D7\u05D9\u05E8: " + foodMenu[1].price + "<h2>\n  <img src=" + foodMenu[1].img + ">\n  <h2> " + foodMenu[2].type + "<h2>\n  <h2>\u05DE\u05D7\u05D9\u05E8: " + foodMenu[2].price + "<h2>\n  <img src=" + foodMenu[2].img + ">\n  <h2>" + foodMenu[3].type + "<h2>\n  <h2>\u05DE\u05D7\u05D9\u05E8: " + foodMenu[3].price + "<h2>\n  <img src=" + foodMenu[3].img + ">";
    products.innerHTML = html;
}
;
