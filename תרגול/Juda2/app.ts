const img = document.querySelector('.img')

const fries: any = {
    name: 'fries',
    price: 15,
    img: "./img/baz.jpg"
};
img.src = fries.img

console.log(fries)