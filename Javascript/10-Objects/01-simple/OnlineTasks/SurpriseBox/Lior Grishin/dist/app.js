var skateboard = {
    prize: 'skateboard',
    penalty: 250
};
var computer = {
    prize: 'computer',
    penalty: 5000
};
var iphone = {
    prize: 'iphone',
    penalty: 3500
};
var ipad = {
    prize: 'ipad',
    penalty: 2000
};
var prizes = [iphone, computer, ipad, skateboard];
// This function returns a random number of the array by input of
//  1. Array of Presents
var getRandomNumber = function (arr) {
    return Math.floor(Math.random() * arr.length);
};
// This function returns won the prize or penalty
// true = won prize
// false = penalty
var prizeWonORPenalty = function () {
    var result = Math.random();
    if (result < 0.5) {
        return true;
    }
    else {
        return false;
    }
};
// This function prints if you won or penalty by input of
//  1. Array of Presents
function returnRandomPresent(arrayOfPresent) {
    // debugger;
    var randNumber = getRandomNumber(prizes);
    // console.log(randNumber)
    // console.log(arrayOfPresent[randNumber])
    if (prizeWonORPenalty()) {
        console.log("You won " + arrayOfPresent[randNumber].prize + "!");
    }
    else {
        console.log("You could won " + arrayOfPresent[randNumber].prize + ", but the chances was against you");
        console.log("You're penalty is " + arrayOfPresent[randNumber].penalty + " NIS.");
    }
}
returnRandomPresent(prizes);
