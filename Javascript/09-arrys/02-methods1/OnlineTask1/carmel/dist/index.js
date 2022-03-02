var prizeOne = {
    prizeType: "Hot Air Ballon Ride",
    prizePrice: 50
};
var prizeTwo = {
    prizeType: "Dinner For Two",
    prizePrice: 120
};
var prizeThree = {
    prizeType: "Family Vacation",
    prizePrice: 330
};
var possiblePrizes = [prizeOne, prizeTwo, prizeThree];
function loto(arr) {
    var num = (Math.random() * arr.length);
    var choosen = arr[num];
    var winOrLose = Math.floor((Math.random() * 1));
    if (winOrLose == 1) {
        return choosen.prizeType;
    }
    else {
        return choosen.prizePrice;
    }
}
var playerWin = loto(possiblePrizes);
console.log(playerWin);
