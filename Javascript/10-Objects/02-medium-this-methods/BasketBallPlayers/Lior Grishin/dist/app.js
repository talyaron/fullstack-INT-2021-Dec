var lebron = {
    name: 'lebron',
    gameScores: [50, 60, 20, 30, 52],
    averageScores: function () {
        var total = 0;
        for (var _i = 0, _a = this.gameScores; _i < _a.length; _i++) {
            var organs = _a[_i];
            total += organs;
        }
        return this.name + " played " + this.gameScores.length + " games with average score of " + total / this.gameScores.length;
    },
    gameInfo: {
        threePointers: [10, 5, 6, 4, 8],
        twoPointers: [9, 20, 1, 8, 12],
        freeThrow: [2, 5, 0, 4, 4]
    },
    gameInfoAverage: function () {
        var totalThree = 0;
        var totalTwo = 0;
        var totalFree = 0;
        for (var i = 0; i < this.gameInfo.threePointers.length; i++) {
            totalThree += this.gameInfo.threePointers[i];
        }
        for (var i = 0; i < this.gameInfo.twoPointers.length; i++) {
            totalTwo += this.gameInfo.twoPointers[i];
        }
        for (var i = 0; i < this.gameInfo.freeThrow.length; i++) {
            totalFree += this.gameInfo.freeThrow[i];
        }
        return this.name + " scored " + totalThree / this.gameInfo.threePointers.length + " three pointers on average, " + totalTwo / this.gameInfo.twoPointers.length + " two pointers on average and " + totalFree / this.gameInfo.freeThrow.length + " free thows!!!!";
    }
};
// create an object the describes a basketball player
// - name
// - an array that conatain number of scores per each game
// - a method which return the average score per game (sum of all score / number of games)
// - * create data for "three pointers", free-throws, two-pointers, and the method should return 
//     the average scores for each type (with object that contain the results)
