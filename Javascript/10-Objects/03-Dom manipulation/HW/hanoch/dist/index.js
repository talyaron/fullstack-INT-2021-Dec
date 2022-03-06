var h2 = document.querySelector('#h2');
var h1 = document.querySelector('#h1');
// h2.innerText = h1.innerText;
var string2 = '';
function moovtxt(string1, string2) {
    string2.innerText += string1.innerText;
}
moovtxt(h1, h2);
