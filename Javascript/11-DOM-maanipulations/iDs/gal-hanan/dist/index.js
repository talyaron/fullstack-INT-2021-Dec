var boxesId = document.querySelectorAll(".box");
boxesId.forEach(function (element) {
    var idName = element.id;
    element.innerText = idName;
});
