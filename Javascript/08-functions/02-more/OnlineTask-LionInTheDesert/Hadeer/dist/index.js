var x = Math.floor(Math.random() * 1001);
console.log(x);
//debugger
for (var i = 1; i < 6; i++) {
    //console.log(i);
    var answer = +prompt('pick a number :');
    //console.log(typeof answer)
    console.log(answer);
    if (answer == x) {
        console.log("YOU WON");
        i = 7;
        alert("YOU WON");
    }
    else if (answer < x) {
        console.log("GO up");
    }
    else if (answer > x) {
        console.log("GO DOWN");
    }
    else if (i == 6) {
        alert("YOU LOST");
    }
}
