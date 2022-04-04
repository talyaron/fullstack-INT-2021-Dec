var img = document.querySelector('.img');
var fries = {
    name: 'fries',
    price: 15,
    img: "./img/baz.jpg"
};
img.src = fries.img;
console.log(fries);
