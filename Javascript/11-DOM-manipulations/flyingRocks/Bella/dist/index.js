// function moveObj() {
//     const $span = $(".spaceRock");
//     $span.animate([
//         // keyframes
//         { transform: 'translateY(100vh)' },
//         { transform: 'translateX(100vw)' }
//       ], function() {
//         let maxLeft = $(window).width() - $span.width();
//         let maxTop = $(window).height() - $span.height();
//         let leftPos = Math.floor(Math.random() * (maxLeft + 10))
//         let topPos = Math.floor(Math.random() * (maxTop + 10))
//         $span.css({ left: leftPos, top: topPos });
//     });
// };
// moveObj();
// setInterval(moveObj,100);
var spaceRocks = document.querySelectorAll('.spaceRock');
spaceRocks.forEach(function (element) {
    element.style.left = getRandomPosition();
    element.style.top = getRandomPosition();
});
function getRandomPosition() {
    var element = (((Math.random() * 800) + 60).toFixed()) + 'px';
    console.dir(element);
    return element;
}
getRandomPosition();
setInterval(function () {
    for (var i = 0; i < spaceRocks.length; i++) {
        spaceRocks.style.top = getRandomPosition() + "px";
        spaceRocks.style.left = getRandomPosition() + "px";
    }
}, 1000);
