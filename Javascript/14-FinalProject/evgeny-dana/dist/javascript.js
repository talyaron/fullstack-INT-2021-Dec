//this gives a unique id
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
////////////////////////////////////////////////////////////////////////////////////
//this is a temporary array for storing the new product cards
var products = [];
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
////////////////////////////////////////////////////////////////////////////
//this renders products 
function renderProducts() {
    var root = document.querySelector("#root");
    var html = '';
    products.forEach(function (product) {
        html +=
            "<div class=\"megaTest\" >\n      <div class=\"test\" >\n            <img src=" + product.image + ">\n            <div class=\"test2\" >\n                  <div>name:" + product.name + "</div>\n                  <div>Price: " + product.price + "</div>\n                  <button onclick=\"handleRemoveProduct('" + product.id + "')\" class=\"btnDelete\">delete</button>\n                  <button onclick=\"showUpdateMenu(event)\" class=\"btnUpdate\">update</button>\n                  <p>in/out stock</p>\n                  <input type=\"checkbox\"> \n            </div>\n        </div>\n        <form class=\"updateProduct\" onsubmit=\"handleUpdateProduct(event, '" + product.id + "')\">\n        <input type=\"text\" name=\"productName\" value=\"" + product.name + "\">\n        <input type=\"text\" name=\"newUrl\" placeholder=\"NEW Item Image url\">\n        <input type=\"text\" name=\"NewPrice\" value=\"" + product.price + "\">\n        <button type=\"submit\">send</button>\n    </form>\n     </div>";
    });
    root.innerHTML = html;
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
    var index = products.findIndex(function (object) {
        return object.id === productId;
    });
    if (index !== -1) {
        products[index].name = ev.target.elements.productName.value;
    }
    if (index !== -1) {
        products[index].price = ev.target.elements.NewPrice.value;
    }
    if (index !== -1) {
        products[index].image = ev.target.elements.newUrl.value;
    }
    console.log(products);
    renderProducts();
}
//////////////////////////////////////////////////////////////////////////////
function showUpdateMenu(event) {
    var showUpdatePanal = document.querySelector(".updateProduct").style.display;
    if (showUpdatePanal == "none") {
        showUpdatePanal == "block";
    }
    console.dir(showUpdatePanal);
}
