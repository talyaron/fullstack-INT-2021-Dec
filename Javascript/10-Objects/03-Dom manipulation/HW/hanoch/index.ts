const h2:HTMLElement = document.querySelector('#h2')
const h1:HTMLElement = document.querySelector('#h1')
// h2.innerText = h1.innerText;
let string2 =  '';
function moovtxt(string1, string2){
    string2.innerText += string1.innerText
}
moovtxt(h1, h2)