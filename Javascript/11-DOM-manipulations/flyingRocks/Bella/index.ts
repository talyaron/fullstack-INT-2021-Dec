

// function moveObj() {
//     const $span = $("#random");
    

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



const spaceRocks: any = document.querySelectorAll('.spaceRock');

spaceRocks.forEach(element => {
    element.style.left = getRandomPosition()
    element.style.top = getRandomPosition()
    setInterval(spaceRocks,3000)
})

let counter = 360;

function getRandomMove() {

  spaceRocks.forEach(element => {

        element.style.left = getRandomPosition()
        element.style.top = getRandomPosition()
        // element.style.transform = `rotate(${counter}deg)`;
        // counter += 360;
        

    })
    
}



function getRandomNumber() {

    let boxsize = (((Math.random() * 100) + 60).toFixed()) + 'px';

    return boxsize;
}

function getRandomPosition() {
    let positionRand = (((Math.random() * 800) + 60).toFixed()) + 'px';
    return positionRand;
}
