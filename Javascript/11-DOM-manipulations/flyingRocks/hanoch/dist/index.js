function moveMeteor() {
    var random = Math.round(Math.random() * 90);
    return random;
}
var meteorImg = document.querySelectorAll('.meteorImg');
function move() {
    meteorImg.forEach(function (img) {
        img.style.left = moveMeteor() + 'vw';
        img.style.top = moveMeteor() + 'vh';
        var elmPosition1 = {
            leftPosition: img.getBoundingClientRect().x,
            rightPosition: img.getBoundingClientRect().right,
            topPosition: img.getBoundingClientRect().y,
            bottomPosition: img.getBoundingClientRect().bottom
        };
        var elmPosition2 = {
            leftPosition: img.getBoundingClientRect().x,
            rightPosition: img.getBoundingClientRect().right,
            topPosition: img.getBoundingClientRect().y,
            bottomPosition: img.getBoundingClientRect().bottom
        };
        // const elmPosition0 = {
        //     leftPosition:img[1].getBoundingClientRect().x,
        //     rightPosition:img[1].getBoundingClientRect().right,
        //     topPosition:img[1].getBoundingClientRect().y,
        //     bottomPosition:img[1].getBoundingClientRect().bottom
        // }
        // const elmPosition3 = {
        //     leftPosition:img[3].getBoundingClientRect().x,
        //     rightPosition:img[3].getBoundingClientRect().right,
        //     topPosition:img[3].getBoundingClientRect().y,
        //     bottomPosition:img[3].getBoundingClientRect().bottom
        // }
        if (elmPosition1.rightPosition > elmPosition2.leftPosition && elmPosition1.topPosition < elmPosition2.bottomPosition && elmPosition1.leftPosition < elmPosition2.rightPosition) {
            console.log('boom');
        }
    });
}
setInterval(move, 5000);
move();
