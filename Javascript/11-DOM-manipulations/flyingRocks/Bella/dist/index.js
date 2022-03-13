function moveObj() {
    var $span = $("#random");
    $span.animate([
        // keyframes
        { transform: 'translateY(100vh)' },
        { transform: 'translateX(100vw)' }
    ], function () {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 10));
        var topPos = Math.floor(Math.random() * (maxTop + 10));
        $span.css({ left: leftPos, top: topPos });
    });
}
;
moveObj();
setInterval(moveObj, 100);
