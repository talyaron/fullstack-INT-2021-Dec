function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}
function guessNum(tri) {
    var number = getRandomNum(100);
    for (var i = 0; i < tri; i++) {
        console.log(number);
        var answer = +prompt('guess a number between 1 to 100');
        if (answer < number) {
            alert("guess an higher number");
            if (i == tri) {
                alert("you lose");
            }
        }
        else if (answer === number) {
            alert("you right");
            i = tri;
        }
        else {
            alert("guess an lower number");
        }
    }
}
guessNum(3);
