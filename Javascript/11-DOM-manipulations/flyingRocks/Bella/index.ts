

function moveObj() {
    const $span = $("#random");
    

    $span.animate([
        // keyframes
        { transform: 'translateY(100vh)' },
        { transform: 'translateX(100vw)' }
      ], function() {
        let maxLeft = $(window).width() - $span.width();
        let maxTop = $(window).height() - $span.height();
        let leftPos = Math.floor(Math.random() * (maxLeft + 10))
        let topPos = Math.floor(Math.random() * (maxTop + 10))

        $span.css({ left: leftPos, top: topPos });
    });
};

moveObj();
setInterval(moveObj,100);


