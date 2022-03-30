var balloonSelect = document.querySelector('.balloon');
console.dir(balloonSelect);
newBallon.addEventListener('click', function () {
    newBallon.style.display === none;
});
function creatBallon() {
    var newBallon = document.createElement('ballonSelect');
    var ballonCreation = document.body.appendChild(newBallon);
}
setInterval(creatBallon, 5000);
