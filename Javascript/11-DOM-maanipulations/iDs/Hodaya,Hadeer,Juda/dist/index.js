var boxId = document.querySelectorAll('.box');
boxId.forEach(function (element) {
    var showId = element.id + element.style.background;
    element.innerText = showId;
    console.log(showId);
});
