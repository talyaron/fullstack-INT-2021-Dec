//this gives a unique id
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
////////////////////////////////////////////////////////////////////////////////////
//this is a temporary array for storing the new product cards
var products = [];
var clientProducts = [];
//////////////////////////////////////////////////////////////////////////////////////
// this handles the button for adding a product
var handleAddProduct = function (ev) {
    ev.preventDefault();
    var image = ev.target.elements.image.value;
    var name = ev.target.elements.name.value;
    var price = ev.target.elements.price.value;
    var id = uid();
    // const imgSrc = URL.createObjectURL(image);
    var item = { id: id, image: image, name: name, price: price };
    products.push(item);
    renderProducts();
    ev.target.reset();
};
function handleLoad() {
    var stringProducts = localStorage.getItem('products');
    if (stringProducts) {
        products = JSON.parse(stringProducts);
        console.log(products);
        renderProducts();
    }
}
function handleClientLoad() {
    var stringToObj = localStorage.getItem('products');
    if (stringToObj) {
        products = JSON.parse(stringToObj);
        console.log(products);
        renderClientProducts();
    }
}
////////////////////////////////////////////////////////////////////////////
//this renders products
function renderProducts() {
    localStorage.setItem('products', JSON.stringify(products));
    var root = document.querySelector("#root");
    var html = "";
    products.forEach(function (product) {
        html += "<div class=\"megaTest\" id=\"" + product.id + "\">\n      <div class=\"upload-product\"  >\n              <div class=\"outOfStuckText\" id=\"noStock-" + product.id + "\" style=\"display:none\"><h2>out of stock</h2></div>\n            <img src=" + product.image + ">\n            <div class=\"productInfo\" >\n                  <p>name:" + product.name + "</p>\n                  <p>Price: " + product.price + "</p>\n                  <button onclick=\"handleRemoveProduct('" + product.id + "')\" class=\"btnDelete\">delete</button>\n                  <button onclick=\"showUpdateMenu('" + product.id + "')\" class=\"btnUpdate\">update</button>\n                  <input onchange=\"outOfStockFunc(event, '" + product.id + "')\" class=\"NumInput\" name=\"stockNum\" type=\"number\" value=\"1\" min=\"0\" > \n            </div>\n        </div>\n        <form class=\"updateProduct\" id=\"update-" + product.id + "\" onsubmit=\"handleUpdateProduct(event, '" + product.id + "')\" style=\"display:none\">\n          <input type=\"text\" name=\"productName\" value=\"" + product.name + "\">\n          <input type=\"text\" name=\"newUrl\" placeholder=\"NEW Item Image url\">\n          <input type=\"text\" name=\"NewPrice\" value=\"" + product.price + "\">\n          <button type=\"submit\">send</button>\n    </form>\n     </div>";
    });
    root.innerHTML = html;
}
function renderClientProducts() {
    var Client_wrapper = document.querySelector(".Client_wrapper");
    var html = "";
    products.forEach(function (product) {
        html += "<div class=\"item\">\n    <img src=\"" + product.image + "\" alt=\"\" id=\"item_Image\">\n    <p>name:" + product.name + "</p>\n    <p>Price:" + product.price + "</p>\n    </div>";
    });
    Client_wrapper.innerHTML = html;
}
////////////////////////////////////////////////////////////////////////
// this removes the product card
function handleRemoveProduct(productId) {
    var index = products.findIndex(function (object) {
        return object.id === productId;
    });
    if (index !== -1)
        products.splice(index, 1);
    console.log(products);
    renderProducts();
}
///////////////////////////////////////////////////////////////////////
// this updates the product card
function handleUpdateProduct(ev, productId) {
    ev.preventDefault();
    console.log(productId);
    var index = products.findIndex(function (object) { return object.id === productId; });
    if (index !== -1) {
        products[index].name = ev.target.elements.productName.value;
    }
    if (index !== -1) {
        products[index].price = ev.target.elements.NewPrice.value;
    }
    if (index !== -1) {
        products[index].image = ev.target.elements.newUrl.value;
    }
    renderProducts();
}
//////////////////////////////////////////////////////////////////////////////
function showUpdateMenu(productId) {
    try {
        var updatePanel = document.querySelector("#update-" + productId);
        //toggle update form
        if (updatePanel) {
            if (updatePanel.style.display === "none") {
                updatePanel.style.display = "block";
            }
            else {
                updatePanel.style.display = "none";
            }
        }
        else {
            throw new Error("Couldnt find update form with id \"update-" + productId + "\"");
        }
    }
    catch (err) {
        console.error(err);
    }
}
//////////////////////////////////////////////////////////////////////////////////////
function outOfStockFunc(event, productId) {
    var stock = document.querySelector("#noStock-" + productId);
    var inStock = event.target.value;
    if (inStock === '0') {
        stock.style.display = "block";
        stock.classList.add('upload-product--blur');
    }
    else {
        stock.style.display = "none";
    }
}
