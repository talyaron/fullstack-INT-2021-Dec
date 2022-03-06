var boxId = document.querySelectorAll('.box');
boxId.forEach(function (element) {
    var showId = element.id;
    element.innerText = showId;
    console.log(showId);
});
