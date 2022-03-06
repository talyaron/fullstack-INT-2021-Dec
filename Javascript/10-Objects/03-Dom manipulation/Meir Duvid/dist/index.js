var root1 = document.querySelector("#root1");
var root2 = document.querySelector("#root2");
console.dir(root1);
console.dir(root2);
function copy(copy) {
    root1.innerText = root2.innerText;
    return root1;
}
copy(root2);
