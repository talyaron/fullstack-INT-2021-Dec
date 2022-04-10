"use strict";

var result = {};
var stringStorage = "";
var productsArr = [];
var productsArrFLS = [];
var output = document.querySelector("#output");
var fileName = '';
var root = document.querySelector("#root");
var contOrBack = document.querySelector("#contOrBack");
var newitem = document.querySelector("#newitem");
var firstTime = true;
var ans = false;
var fileinput = "";
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
  window.localStorage.clear();
  console.log(window.localStorage);
  myButton.style.backgroundColor = "gray";
  root.innerHTML = "<div id=\"newitem\">\n                                <p>Please type details</>\n                                <form action=\"\" onsubmit=\"handleNewProduct(event)\">\n                                    <input type=\"text\" name=\"typeName\" placeholder=\"Enter type of item\">\n                                    <input type=\"text\" name=\"description\" placeholder=\"Enter description of item\">\n                                    <input type=\"number\" name=\"price\" placeholder=\"Enter a price\" >\n                                    <input type=\"text\" name=\"currency\" placeholder=\"Enter currency\">\n                                    <input type=\"file\" name=\"imageFile\" placeholder = \"Please pick the image of the item\">\n                                    <button type=\"submit\">SEND</button> \n                                </form>\n                                <img id=\"output\" width=\"100px\"/>\n                                <button id=\"exitButton\" onclick=\"backToManager(event)\">Back To Manager Page</button>\n                            </div>";
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
      if (details[i].name == "imageFile") {
        result['imageFile'] = details['imageFile'].files[0];
        fileinput = URL.createObjectURL(result["imageFile"]);
      } else {
        result[details[i].name] = details[i].value;
      }
    }
  }

  result["serialNo"] = uID();
  var newProduct = {
    name: result['typeName'],
    serialNo: result['serialNo'],
    description: result['description'],
    price: result["price"],
    currency: result['currency'],
    pImage: fileinput
  };
  console.dir(productsArr);
  window.localStorage.setItem(result['serialNo'], JSON.stringify(newProduct));
  console.dir(window.localStorage);
  productsArr.push(newProduct);
  renderProducts(newProduct);
  ev.target.reset();
  localStorage.setItem("productsArr", JSON.stringify(productsArr));
  ev.target.reset();
  renderProducts();
}

function uID() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function renderProducts(newProduct) {
  render = document.querySelector("#render");
  html += "<div class=\"bigDiv\" >\n            <img src=" + newProduct.pImage + " width=\"100px\">\n            <div class=\"productDiv\" >\n                <div>name:" + newProduct.name + "</div>  \n                <div>serialNo:" + newProduct.serialNo + "</div>\n                <div>description: " + newProduct.description + "</div>\n                <div>price: " + newProduct.price + "</div>\n                <div>currency: " + newProduct.currency + "</div>\n                <button class=\"button\">delete</button>\n                <button class=\"button\">update</button>\n            </div>\n        </div>";
  render.innerHTML = html;
  render.style.position = "absolute";
  render.style.top = "250px";
  render.style.left = "700px";
}

function renderSavedProducts() {
  var products = document.querySelector("#products");

  for (var i = 0; i < window.localStorage.length; i++) {
    stringStorage = window.localStorage.key(i);
    console.log("the storage: " + stringStorage);
    var ourString = window.localStorage.getItem("" + stringStorage);
    console.log("ourString:" + ourString);
    productsArrFLS.push(JSON.parse(ourString));
    console.log(productsArrFLS);
  }

  ;
  var html = '';
  productsArrFLS.forEach(function (product) {
    //    html+=
    //     `<div class="bigDiv" >
    //         <img src=${product.pImage} width="100px">
    //         <div class="productDiv" >
    //               <div>name:${product.name}</div>  
    //               <div>serialNo:${product.serialNo}</div>
    //               <div>description: ${product.description}</div>
    //               <div>price: ${product.price}</div>
    //               <div>currency: ${product.currency}</div>
    //         </div>
    //     </div>`
    html += "<div class=\"wrapper\">\n                <div class=\"item\">\n                        <img src=" + product.pImage + " width=\"100px\"> \n                        <div class=\"upload\">\n                            <div>name:" + product.name + "</div>  \n                            <div>serialNo:" + product.serialNo + "</div>\n                            <div>description: " + product.description + "</div>\n                            <div>price: " + product.price + "</div>\n                            <div>currency: " + product.currency + "</div>\n                        </div>\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n                    </div>\n            </div>";
  });
  products.innerHTML = html; // render.style.position="absolute"
  // render.style.top="250px"
  // render.style.left="700px"
  //render.style.border= "1px solid black"
}

function backToManager(ev) {
  //saveNewProducts()
  console.log("render before remove  " + render);
  alert("Products added");
  output.remove();
  newitem.remove();
  render.remove();
  console.log("render after remove  " + render);
  myButton.style.backgroundColor = "rgb(172, 143, 161)";
  window.location.href = "index1.html";
}

function presentItem() {
  // const cliant:any = document.querySelector("#cliant")
  // const storedArr = JSON.parse(localStorage.getItem("productsArr"))
  var products = document.querySelector("#products");

  for (var i = 0; i < window.localStorage.length; i++) {
    stringStorage = window.localStorage.key(i);
    console.log("the storage: " + stringStorage);
    var ourString = window.localStorage.getItem("" + stringStorage);
    console.log("ourString:" + ourString);
    productsArrFLS.push(JSON.parse(ourString));
    console.log(productsArrFLS);
  }

  ;
  var html = '';
  productsArrFLS.forEach(function (product) {
    console.log(product.pImage);
    html += "<div class=\"wrapper\">\n                <div class=\"item\">\n                        <img src=" + product.pImage + " width=\"100px\"> \n                        <div class=\"upload\">\n                            <div>name:" + product.name + "</div>  \n                            <div>serialNo:" + product.serialNo + "</div>\n                            <div>description: " + product.description + "</div>\n                            <div>price: " + product.price + "</div>\n                            <div>currency: " + product.currency + "</div>\n                        </div>\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n                    </div>\n            </div>";
  });
  cliant.innerHTML = html;
  cliant.style.display = "flex";
}