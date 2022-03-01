var prizeOne;
var prizeTwo;
var possiblePrizes = {
    "const": prizeOne,
    Prize: Prize,
    "const": prizeTwo,
    Prize: Prize,
    "const": prizeThree,
    Prize: Prize
};
function loto(arr) {
    var num = (Math.random() * arr.length);
    var winOrLose = (Math.random() * 1);
    if (winOrLose == 1) {
        return arr[num].prizeType;
    }
    else {
        return arr[num].prizePrice;
    }
}
var playerWin = loto(possiblePrizes);
console.log(playerWin);
