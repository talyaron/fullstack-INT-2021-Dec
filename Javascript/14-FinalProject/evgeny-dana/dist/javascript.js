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
            "<div>\n            <div>" + product.name + "</div>\n            <img src=" + product.imgSrc + ">\n            <div>Price: " + product.price + "</div>\n        </div>";
    });
    root.innerHTML = html;
}
