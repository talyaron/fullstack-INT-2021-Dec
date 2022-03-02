"use strict";

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
  var num = Math.random() * arr.length;
  var winOrLose = Math.random() * 1;

  if (winOrLose == 1) {
    return arr[num].prizeType;
  } else {
    return arr[num].prizePrice;
  }
}

var playerWin = loto(possiblePrizes);
console.log(playerWin);