"use strict";

var result = {};
var stringStorage = "";
var productsArr = [];
var productsArrFLS = [];
var productsCart = [];
var output = document.querySelector("#output");
var fileName = '';
var root = document.querySelector("#root");
var contOrBack = document.querySelector("#contOrBack");
var newitem = document.querySelector("#newitem");
var firstTime = true;
var ans = false;
var fileinput = new Blob();
var html = "";
var render = document.querySelector("#render");
var myButton = document.querySelector("#button2");
var manager = {
  name: "Tal Yaron",
  username: "tal",
  password: "1234"
};

function handleUser(ev) {
  ev.preventDefault();
  var details = ev.target.elements;

  for (var i = 0; i < details.length; i++) {
    if (details[i].name && details[i].value) {
      result[details[i].name] = details[i].value;
    }
  }

  if (result['name'] == manager['name'] && result['pass'] == manager['password']) {
    window.location.href = "index1.html";
  } else {
    window.location.href = "client.html";
  }
}

function handleNew(ev) {
  //window.localStorage.clear();
  myButton.style.backgroundColor = "gray";
  root.innerHTML = "<div id=\"newitem\">\n                                <p>Please type details</>\n                                <form action=\"\" onsubmit=\"handleNewProduct(event)\">\n                                    <input type=\"text\" name=\"typeName\" placeholder=\"Enter type of item\">\n                                    <input type=\"text\" name=\"description\" placeholder=\"Enter description of item\">\n                                    <input type=\"number\" name=\"price\" placeholder=\"Enter a price\" >\n                                    <input type=\"text\" name=\"currency\" placeholder=\"Enter currency\">\n                                    <input type=\"URL\" name=\"imageFile\" placeholder = \"Please type the url of the image\">\n                                    <button type=\"submit\">SEND</button> \n                                </form>\n                                <img id=\"output\" width=\"100px\"/>\n                                <button id=\"exitButton\" onclick=\"backToManager(event)\">Back To Manager Page</button>\n                            </div>";
  newitem = document.querySelector("#newitem");
  newitem.style.display = "flex";
  newitem.style.flexDirection = "column";
  newitem.style.position = "absolute";
  newitem.style.top = "200px";
  newitem.style.left = "400px";
  output = document.querySelector("#output");
  output.style.position = "absolute";
  output.style.top = "50px";
  output.style.left = "350px";
}

function handleNewProduct(ev) {
  ev.preventDefault();
  var details = ev.target.elements;

  for (var i = 0; i < details.length; i++) {
    if (details[i].name && details[i].value) {
      result[details[i].name] = details[i].value;
    }
  }

  result["serialNo"] = uID();
  var newProduct = {
    name: result['typeName'],
    serialNo: result['serialNo'],
    description: result['description'],
    price: result["price"],
    currency: result['currency'],
    pImage: result["imageFile"]
  };
  window.localStorage.setItem(result['serialNo'], JSON.stringify(newProduct));
  productsArr.push(newProduct);
  renderProducts(newProduct); //localStorage.setItem("productsArr", JSON.stringify(productsArr))

  ev.target.reset();
}

function uID() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function renderProducts(newProduct) {
  console.log("we are at renderProducts");
  render = document.querySelector("#render"); //let fileurl:URL = URL.createObjectURL(result["imageFile"])

  html += "<div class=\"bigDiv\" id=\"" + newProduct.serialNo + "\">\n            <img src=" + newProduct.pImage + " width=\"100px\">\n            <div class=\"productDiv\" >\n                <div>name:" + newProduct.name + "</div>  \n                <div>serialNo:" + newProduct.serialNo + "</div>\n                <div>description: " + newProduct.description + "</div>\n                <div>price: " + newProduct.price + "</div>\n                <div>currency: " + newProduct.currency + "</div>\n                <button class=\"button\" onclick = handleDelete(event,\"" + newProduct.serialNo + "\")>Delete product</button>\n                <button class=\"button\" onclick = handleUpdate(event,\"" + newProduct.serialNo + "\")>Update product</button>\n            </div>\n        </div>";
  console.log("html:" + html);
  render.innerHTML = html;
  render.style.position = "absolute";
  render.style.top = "250px";
  render.style.left = "700px";
}

function backToManager(ev) {
  //saveNewProducts()
  //console.log(`render before remove  ${render}`)
  alert("Products added");
  output.remove();
  newitem.remove();
  render.remove(); //console.log(`render after remove  ${render}`)

  myButton.style.backgroundColor = "rgb(172, 143, 161)";
  window.location.href = "index1.html";
}

function presentItem(ev) {
  var products = document.querySelector("#products");

  for (var i = 0; i < window.localStorage.length; i++) {
    stringStorage = window.localStorage.key(i);
    var ourString = window.localStorage.getItem("" + stringStorage);
    productsArrFLS.push(JSON.parse(ourString));
  }

  ;
  var html = '';
  productsArrFLS.forEach(function (product) {
    var serial = product.serialNo;
    html += "<div class=\"page\">\n                <div class=\"wrapper\">\n                    <div class=\"item\">\n                            <img src=" + product.pImage + " width=\"100px\" onclick='handlePurchase(event,\"" + serial + "\")> \n                            <div class=\"upload\">\n                                <div onclick='handlePurchase(event,\"" + serial + "\")'>name:" + product.name + "</div>  \n                                <div onclick='handlePurchase(event,\"" + serial + "\")'>serialNo:" + product.serialNo + "</div>\n                                <div onclick='handlePurchase(event,\"" + serial + "\")'>description: " + product.description + "</div>\n                                <div onclick='handlePurchase(event,\"" + serial + "\")'>price: " + product.price + "</div>\n                                <div onclick='handlePurchase(event,\"" + serial + "\")'>currency: " + product.currency + "</div>\n                                \n                            </div>\n                            \n                    </div>\n                    <button onclick=\"moveToPayment(event)\">shopping basket</button>\n                </div>\n            </div>";
  });
  console.log("html " + html);
  products.innerHTML = html;
}

function handlePurchase(ev, serialNo) {
  console.log("handle purchase");
  console.dir(ev);
  console.dir(serialNo);
  var cart1 = window.localStorage.getItem(serialNo);
  var cart2 = []; //JSON.parse(cart1)

  productsCart.push(JSON.parse(cart1)); //const pro = ev.target.parentElement.innerText

  cart2.push(JSON.parse(cart1));
  console.log(cart2);
  localStorage.setItem("cart", JSON.stringify(productsCart));
  console.log(productsCart);
}

var p = '';

function payment() {
  console.log(localStorage.cart);
  var pay = JSON.parse(localStorage.cart);
  pay.forEach(function (item) {
    p += "<div class=\"item1\">\n                            <img src=" + item.pImage + " width=\"100px\" )> \n                            <div>\n                                <div)'>name:" + item.name + "</div>  \n                                <div)'>serialNo:" + item.serialNo + "</div>\n                                <div)'>description: " + item.description + "</div>\n                                <div)'>price: " + item.price + "</div>\n                                <div)'>currency: " + item.currency + "</div>\n                                \n                            </div>\n                            \n                    </div>";
  });
  document.body.innerHTML = p;
  document.body.innerHTML += "<br> <br> <img src=\"cart.png\" width = 20px>  <p  font-size= 3px> you got " + pay.length + " items'<p></p>";
}

function moveToPayment() {
  window.location.href = "cliant1.html";
}

function handleUpdate(ev, serialNo) {
  console.log("handleUpdate");
  console.log(serialNo);
  var Prodstring = localStorage.getItem(serialNo);
  var prodToUpd = JSON.parse(Prodstring);
  var updRnd = document.querySelector("#updRnd");

  try {
    html = "<div id=\"itemUpd\">\n    <p>Please update details</>\n    <form action=\"\" onsubmit=\"updateItems(event,\"" + prodToUpd.serialNo + "\")\">\n        <input type=\"text\" name=\"typeName\" value=\"" + prodToUpd.name + "\">\n        <input type=\"text\" name=\"description\" value=\"" + prodToUpd.description + "\">\n        <input type=\"number\" name=\"price\" value=\"" + prodToUpd.price + "\" >\n        <input type=\"text\" name=\"currency\" value=\"" + prodToUpd.currency + "\">\n        <button type=\"submit\">SEND</button> \n    </form>\n    <img id=\"output\" src=\"" + prodToUpd.pImage + "\" width=\"100px\"/>\n    </div>";
    updRnd.innerHTML = html;
    updRnd.style.display = "flex";
    updRnd.style.flexDirection = "column";
    updRnd.style.position = "absolute";
    updRnd.style.top = "200px";
    updRnd.style.left = "400px";
    updRnd.style.backgroundColor = "blue";
    output.style.position = "absolute";
    output.style.top = "50px";
    output.style.left = "350px";
  } catch (err) {
    console.error(err);
  }

  function handleDelete(ev, serialNo) {
    console.log(serialNo);
    localStorage.removeItem(serialNo);
    var toDel = document.querySelector("#" + serialNo);
    toDel.remove();
  }

  function deleteItems(ev) {
    var products = document.querySelector("#render");

    for (var i = 0; i < window.localStorage.length; i++) {
      stringStorage = window.localStorage.key(i);
      var ourString = window.localStorage.getItem("" + stringStorage);
      productsArrFLS.push(JSON.parse(ourString));
    }

    ;
    var html = '';
    productsArrFLS.forEach(function (product) {
      var serial = product.serialNo;
      html += "<div class=\"page\" id=\"" + product.serialNo + "\">\n            <div class=\"wrapper\">\n                <div class=\"item\">\n                        <img src=" + product.pImage + " width=\"100px\")> \n                        <div class=\"upload\">\n                            <div>name:" + product.name + "</div>  \n                            <div>serialNo:" + product.serialNo + "</div>\n                            <div>description: " + product.description + "</div>\n                            <div>price: " + product.price + "</div>\n                            <div>currency: " + product.currency + "</div>\n                            <button class=\"button\" onclick = handleDelete(event,\"" + Product.serialNo + "\")>Delete product</button>\n                        </div>\n                </div>\n            </div>\n        </div>";
    });
    console.log("html " + html);
    render.innerHTML = html;
  }

  function updateItems(ev, serialNo) {
    console.log("updateItems");
    ev.preventDefault();
    var details = ev.target.elements;
    console.log("details of this " + details);

    for (var i = 0; i < details.length; i++) {
      if (details[i].name && details[i].value) {
        result[details[i].name] = details[i].value;
      }
    }

    result["serialNo"] = serialNo;
    console.log("result: " + result);
    var newProduct = {
      name: result['typeName'],
      serialNo: result['serialNo'],
      description: result['description'],
      price: result["price"],
      currency: result['currency'],
      pImage: result["imageFile"]
    };
    console.log("newProduct: " + newProduct);
    window.localStorage.removeItem(serialNo);
    window.localStorage.setItem(result['serialNo'], JSON.stringify(newProduct));
    console.log("to renderProducts");
    renderProducts(newProduct); //localStorage.setItem("productsArr", JSON.stringify(productsArr))
    // let updRnd:HTMLDivElement = document.querySelector("#itemUpd")
    // updRnd.remove()
  }
}