var boxs = document.querySelectorAll(".box");
boxs.forEach(function (element) {
    var idName = element.id;
    element.innerText = idName;
    console.log(idName);
});
console.dir(boxs);
