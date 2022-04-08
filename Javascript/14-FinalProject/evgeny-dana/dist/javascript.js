var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var products = [];
var handleAddProduct = function (ev) {
    ev.preventDefault();
    var image = ev.target.elements.image.files[0];
    var name = ev.target.elements.name.value;
    var price = ev.target.elements.price.value;
    var id = uid();
    var imgSrc = URL.createObjectURL(image);
    var item = { id: id, image: image, imgSrc: imgSrc, name: name, price: price };
    products.push(item);
    renderProducts();
    ev.target.reset();
};
function renderProducts() {
    var root = document.querySelector("#root");
    var html = '';
    products.forEach(function (product) {
        html +=
            "<div class=\"megaTest\" >\n      <div class=\"test\" >\n            <img src=" + product.imgSrc + ">\n            <div class=\"test2\" >\n                  <div>name:" + product.name + "</div>\n                  <div>Price: " + product.price + "</div>\n                  <button onclick=\"handleRemoveProduct('" + product.id + "')\" class=\"btnDelete\">delete</button>\n                  <button onclick=\"handleUpdateProduct('" + product.id + "')\" class=\"btnUpdate\">update</button>\n                  <p>in/out stock</p>\n                  <input type=\"checkbox\"> \n            </div>\n        </div>\n        <form onsubmit=\"handleUpdateProduct(event, " + product.id + ")\">\n            <input type=\"text\" name=\"productName\" value=\"" + product.name + "\" >\n            <input type=\"text\" value=\"" + product.price + "\" >\n            <input type=\"file\" value=\"" + product.imgSrc + "\" >\n            <input type=\"submit\" value=\"confirm changes\"/>\n            </form>\n     </div>";
    });
    root.innerHTML = html;
}
function handleRemoveProduct(productId) {
    // products.indexOf()
    var index = products.findIndex(function (object) {
        return object.id === productId;
    });
    if (index !== -1)
        products.splice(index, 1);
    console.log(products);
    renderProducts();
}
function handleUpdateProduct(event, productId) {
    event.preventDefault();
    var index = products.findIndex(function (object) {
        return object.id === productId;
    });
    if (index !== -1)
        products[index].name = event.target.elements.productName.value;
    console.log(products);
}
