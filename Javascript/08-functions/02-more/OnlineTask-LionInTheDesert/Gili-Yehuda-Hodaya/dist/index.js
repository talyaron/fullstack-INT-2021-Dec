var generatedNumber = Math.floor(Math.random() * 1000); // genrating random number for game
console.log(generatedNumber); // for test
for (var i = 0; i < 5;) {
    var answer = +prompt('what is you guess?');
    if (answer == generatedNumber) {
        i = 6;
        alert("Congratiolations! You win!");
    }
    else if (answer > generatedNumber) {
        console.log(i);
        i++;
        console.log("Your number is too big. Try a smaller number. You got " + (5 - i) + " trys left");
        if (i == 5) {
            alert("You lose!");
        }
    }
    else if (answer < generatedNumber) {
        console.log(i);
        i++;
        console.log("Your number is too small. Try a bigger number. You got " + (5 - i) + " trys left");
        if (i == 5) {
            alert("You lose!");
        }
    }
}
