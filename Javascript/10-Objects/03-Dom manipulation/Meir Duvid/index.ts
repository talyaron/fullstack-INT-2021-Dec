const root1:HTMLElement = document.querySelector("#root1");
const root2:HTMLElement = document.querySelector("#root2");

console.dir(root1);
console.dir(root2);


function copy(copy:HTMLElement) {
    root1.innerText= root2.innerText
    return root1

}

copy(root2);