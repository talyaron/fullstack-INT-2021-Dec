const root1:HTMLDivElement = document.querySelector("#root1");
const root2:HTMLDivElement = document.querySelector("#root2");
const img1:HTMLImageElement = document.querySelector('#img1');

console.log(root1);
console.dir(root2)

root2.innerText = root1.innerText;
img1.src = 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg'