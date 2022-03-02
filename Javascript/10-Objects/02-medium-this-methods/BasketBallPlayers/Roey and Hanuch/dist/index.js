var playerOne = {
    name: 'Michel Jorden',
    numOfScores: [30, 50, 56, 39, 91, 28],
    averageScores: function () {
        var number = 0;
        for (var i = 0; i < this.numOfScores.length; i++) {
            number += this.numOfScores[i];
        }
        var finalCalculation = number / this.numOfScores.length;
        return finalCalculation;
    }
};
console.log(playerOne.averageScores());
var playerTwo = {
    name: 'Kobe Braien',
    threePointers: [2, 3, 5, 3, 1, 6],
    freeThrows: [7, 4, 8, 2, 1, 5, 1],
    towPointers: [10, 6, 9, 2, 1, 5, 6],
    averageCalculator: function (input) {
        var number = 0;
        for (var i = 0; i < input.length; i++) {
            number += input[i];
        }
        var finalCalculation = number / input.length;
        return finalCalculation;
    }
};
var threePointerAverage = playerTwo.threePointers;
console.log(playerTwo.averageCalculator(playerTwo.threePointers));
console.log(playerTwo.averageCalculator(playerTwo.freeThrows));
console.log(playerTwo.averageCalculator(playerTwo.towPointers));
