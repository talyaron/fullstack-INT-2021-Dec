var playerOne = {
    name: "Meir",
    gameScore: [32, 24, 22, 19, 20],
    getScoreAvg: function () {
        var scoreSum = 0;
        this.gameScore.forEach(function (element) {
            scoreSum = scoreSum + element;
        });
        var avg = scoreSum / this.gameScore.length;
        return this.name + " has an average score of " + avg;
    },
    threePointers: [3, 7, 1, 0, 2],
    GetAvgThreePointers: function () {
        var scoreSum = 0;
        this.threePointers.forEach(function (element) {
            scoreSum = scoreSum + element;
        });
        var avg = scoreSum / this.threePointers.length;
        return this.name + " has an average score of " + avg + " in Three Pointers";
    },
    freeThrows: [2, 1, 0, 1, 3],
    GetAvgFreeThrows: function () {
        var scoreSum = 0;
        this.freeThrows.forEach(function (element) {
            scoreSum = scoreSum + element;
        });
        var avg = scoreSum / this.freeThrows.length;
        return this.name + " has an average score of " + avg + " in Free Throw";
    },
    towPointers: [3, 4, 2, 1, 5],
    GetAvgTowPointers: function () {
        var scoreSum = 0;
        this.towPointers.forEach(function (element) {
            scoreSum = scoreSum + element;
        });
        var avg = scoreSum / this.towPointers.length;
        return this.name + " has an average score of " + avg + " in Tow Pointers";
    }
};
var PlayerOneAvg = playerOne.getScoreAvg();
console.log(PlayerOneAvg);
var playerOneAvgTWO = playerOne.GetAvgThreePointers();
console.log(playerOneAvgTWO);
var playerOneAvgThree = playerOne.GetAvgTowPointers();
console.log(playerOneAvgThree);
var playerOneAvgFour = playerOne.GetAvgFreeThrows();
console.log(playerOneAvgFour);
