var result = {};
var productsArr = [];
var output = document.querySelector("#output");
var fileName = '';
var root = document.querySelector("#root");
var contOrBack = document.querySelector("#contOrBack");
var newitem = document.querySelector("#newitem");
var firstTime = true;
var ans = false;
var fileinput = "";
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
    }
}
function handleNew(ev) {
    myButton.style.backgroundColor = "gray";
    root.innerHTML += "<div id=\"newitem\">\n                                <p>Please type details</>\n                                <form action=\"\" onsubmit=\"handleNewProduct(event)\">\n                                    <input type=\"text\" name=\"typeName\" placeholder=\"Enter type of item\">\n                                    <input type=\"text\" name=\"serialNo\" placeholder=\"Enter serial number of item\">\n                                    <input type=\"text\" name=\"description\" placeholder=\"Enter description of item\">\n                                    <input type=\"number\" name=\"price\" placeholder=\"Enter a price\" >\n                                    <input type=\"text\" name=\"currency\" placeholder=\"Enter currency\">\n                                    <input type=\"file\" name=\"imageFile\" placeholder = \"Please pick the image of the item\">\n                                    <button type=\"submit\">SEND</button> \n                                </form>\n                                <img id=\"output\" width=\"100px\"/>\n                                <button id=\"exitButton\" onclick=\"backToManager(event)\">Back To Manager Page</button>\n                            </div>";
    //<a href="index1.html">back to manager page</a> 
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
    console.log("we are here");
    ev.preventDefault();
    var details = ev.target.elements;
    for (var i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
            if (details[i].name == "imageFile") {
                result['imageFile'] = details['imageFile'].files[0];
                fileinput = URL.createObjectURL(result["imageFile"]);
                //displayPic()
            }
            else {
                result[details[i].name] = details[i].value;
            }
        }
    }
    fileinput = URL.createObjectURL(result["imageFile"]);
    output = document.querySelector("#output");
    console.log(output.style.opacity);
    output.src = fileinput;
    //console.log(typeof fileinput)
    var newProduct = {
        name: result['typeName'],
        serialNo: result['serialNo'],
        description: result['description'],
        price: result["price"],
        currency: result['currency'],
        pImage: fileinput
    };
    productsArr.push(newProduct);
    console.dir(productsArr);
    ev.target.reset();
    renderProducts();
    //ans = handleDirection('managerAddProduct')
}
function renderProducts() {
    var render = document.querySelector("#render");
    var html = '';
    productsArr.forEach(function (product) {
        html +=
            "<div class=\"test\" >\n                <img src=" + product.pImage + " width=\"100px\">\n                <div class=\"test2\" >\n                      <div>name:" + product.name + "</div>  \n                      <div>serialNo:" + product.serialNo + "</div>\n                      <div>description: " + product.description + "</div>\n                      <div>price: " + product.price + "</div>\n                      <div>currency: " + product.currency + "</div>\n                      <button class=\"button\">delete</button>\n                      <button class=\"button\">update</button>\n                </div>\n            </div>";
    });
    render.innerHTML = html;
    render.style.position = "absolute";
    render.style.top = "250px";
    render.style.left = "700px";
    render.style.border = "1px solid black";
}
function backToManager(ev) {
    alert("Products added");
    newitem.remove();
    myButton.style.backgroundColor = "rgb(172, 143, 161)";
    window.location.href = "index1.html";
}
var loadImg = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};
function handleHidden(ev) {
    ev.target.hidden = true;
}
function handleItem1(ev) {
    console.log(ev);
    var content = ev.target.value;
    var div = document.querySelector("#addItemName");
    div.innerHTML = "<p>" + content + "</p>";
    ev.target.hidden = true;
}
function handleItem0(ev) {
    console.log(ev);
    var content = ev.target.value;
    var div = document.querySelector("#addItemPrice");
    div.innerHTML = "<p>" + content + " \u05E9\"\u05D7</p>";
    ev.target.hidden = true;
}
function handleDelete(ev) {
    var catchItem = document.querySelector("#newitem");
    console.log(catchItem);
    catchItem.innerHTML = "";
    ev.target.hidden = true;
}
