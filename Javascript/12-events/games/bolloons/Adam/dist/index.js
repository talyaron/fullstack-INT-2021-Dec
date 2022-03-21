var Balloons = document.querySelectorAll(".balloon");
console.dir(Balloons);
function BallonsUp(Balloons) {
    Balloons.forEach(function (element) {
        element.style.left = getRandomNumber() + "vw";
        element.style.top = '-12vh';
    });
    function getRandomNumber() {
        var randomPos = Math.floor(Math.random() * 90);
        return randomPos;
    }
}
BallonsUp(Balloons);
setInterval(Balloons, 2000);
//     function OneBallon(balloon: HTMLImageElement) {
//         balloon.style.top = `112vh`;
//         balloon.style.left = `${Math.random() * 90}vw`
//         setInterval(() => {
//             balloon.style.top = `-12vh`;
//         }, 500)
//     }
// }
