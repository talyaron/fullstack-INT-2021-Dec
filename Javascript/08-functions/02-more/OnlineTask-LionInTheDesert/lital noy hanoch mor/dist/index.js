function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var guess;
var random = randomNumber(1, 10);
console.log(random);
for (var i = 1; i < 6; i++) {
    guess = +prompt('what is you guess?');
    if (guess == random) {
        alert("you guess the number!!" + i);
        i = 6;
    }
    else if ((guess < random) && (i < 5)) {
        alert('go higher!!');
    }
    else if ((guess < random) && (i < 5)) {
        alert('go lower!!');
    }
}
if (guess != random) {
    alert('you lost');
}
