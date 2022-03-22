var meteor = document.querySelectorAll('.picture');
var boomImg = document.querySelector('.boom_image');
// starting random positions for meteors
meteor.forEach(function (element) {
    element.style.top = Math.random() * 100 + 'vh';
    element.style.left = Math.random() * 100 + 'vw';
    element.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
});
////////////////////////////////////////
function getRandomNumberVertical() {
    var numSome = Math.random() * 100 + 'vh';
    return numSome;
}
function getRandomNumberHorizontal() {
    var numSome = Math.random() * 100 + 'vw';
    return numSome;
}
function getRandomRotation() {
    meteor.forEach(function (element) {
        element.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
    });
}
////////////////////////////////////////
// apply random position for each meteor
function movPos() {
    meteor.forEach(function (element) {
        element.style.top = getRandomNumberVertical();
        element.style.left = getRandomNumberHorizontal();
        getRandomRotation();
    });
}
// sets random position each 5000 milisec
setInterval(movPos, 5000);
// checking distance less then rockDist each 1 milisec
setInterval(positionFigure, 0.5);
function positionFigure() {
    var rockDistance = 5;
    for (var i = 0; i < meteor.length; i++) {
        var post = meteor[i].getBoundingClientRect().top;
        var posb = meteor[i].getBoundingClientRect().bottom;
        var posl = meteor[i].getBoundingClientRect().left;
        var posr = meteor[i].getBoundingClientRect().right;
        for (var j = i + 1; j < meteor.length; j++) {
            var pos2t = meteor[j].getBoundingClientRect().top;
            var pos2b = meteor[j].getBoundingClientRect().bottom;
            var pos2l = meteor[j].getBoundingClientRect().left;
            var pos2r = meteor[j].getBoundingClientRect().right;
            ////////////////////////////////////////////////////////////////////////////////////
            /* boomImg.style.display = 'block'; */
            if (Math.abs(posb - pos2t) < rockDistance && Math.abs(posr - pos2l) < rockDistance) {
                console.log('bottom top and right left');
                /*             boomImg.style.display = 'block';
                            boomImg.style.left = meteor[j].getBoundingClientRect().left;
                            boomImg.style.top = meteor[j].getBoundingClientRect().top; */
            }
            else if (Math.abs(posb - pos2t) < rockDistance && Math.abs(posl - pos2r) < rockDistance) {
                console.log('bottom top and left right');
            }
            else if (Math.abs(post - pos2b) < rockDistance && Math.abs(posl - pos2r) < rockDistance) {
                console.log('top bottom and left right');
            }
            else if (Math.abs(post - pos2b) < rockDistance && Math.abs(posr - pos2l) < rockDistance) {
                console.log('top bottom and right left');
            }
        }
    }
}
