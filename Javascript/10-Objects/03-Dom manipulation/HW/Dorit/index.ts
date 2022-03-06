
const h1 = document.querySelector('#myH1');
const h2 = document.querySelector("#myH2")
const img:HTMLImageElement = document.querySelector(".myImg")
const p = document.querySelector(".myP")

console.dir(h1)
console.dir(h2)
console.dir(p)
console.dir(img)

let h1Text:string = h1.innerHTML;
let h2Text:string = h2.innerHTML;
let pText:string = p.innerHTML;
let imgSrc = img.src;

console.log (`h1 before the switch:  ${h1Text}`)
let newText:string = h1Text;
h1Text = h2Text;
console.log (`h1 after the switch: ${h1Text}`)
console.log(`+++++++++++++++++++++++++++++++`)
console.log (`h2 before the switch: ${h2Text}`)
h2Text = pText;
console.log (`h2 after the switch: ${h2Text}`)
console.log(`+++++++++++++++++++++++++++++++`)
console.log (`p before the switch: ${pText}`)
pText = newText;
console.log (`p after the switch: ${pText}`)
console.log(`+++++++++++++++++++++++++++++++`)
console.log (`source of the image before the switch: ${imgSrc}`)
imgSrc = "https://1000logos.net/wp-content/uploads/2016/10/BBC-Logo-1.png";
console.log (`source of the image after the switch: ${imgSrc}`)
console.log(`+++++++++++++++++++++++++++++++`)
