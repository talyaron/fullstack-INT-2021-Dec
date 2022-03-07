
let h1:any = document.querySelector('#myH1');
let h2:any = document.querySelector("#myH2")
let img:HTMLImageElement = document.querySelector(".myImg")
let p:any = document.querySelector(".myP")

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
h1.innerHTML=h1Text;
console.log (`h1 after the switch: ${h1Text}`)
console.log(`+++++++++++++++++++++++++++++++`)
console.log (`h2 before the switch: ${h2Text}`)
h2Text = pText;
h2.innerHTML=h2Text;
console.log (`h2 after the switch: ${h2Text}`)
console.log(`+++++++++++++++++++++++++++++++`)
console.log (`p before the switch: ${pText}`)
pText = newText;
p.innerHTML=pText;
console.log (`p after the switch: ${pText}`)
console.log(`+++++++++++++++++++++++++++++++`)
console.log (`source of the image before the switch: ${imgSrc}`)
imgSrc = "https://1000logos.net/wp-content/uploads/2016/10/BBC-Logo-1.png";
console.log (`source of the image after the switch: ${imgSrc}`)
img.src = imgSrc;
console.log(`+++++++++++++++++++++++++++++++`)
