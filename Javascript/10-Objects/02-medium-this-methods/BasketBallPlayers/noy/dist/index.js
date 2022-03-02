// create an object the describes a basketball player
// - name
// - an array that conatain number of scores per each game
// - a method which return the average score per game (sum of all score / number of games)
// - * create data for "three pointers", free-throws, tow-pointers, and the method showd return the average scores 
// for each type (with object that contain the results)
var player = {
    name: "Moshe",
    gameScores: [30, 18, 24],
    averageScore: function () {
        var sum = 0;
        this.gameScores.forEach(function (element) {
            sum += element;
        });
        return (sum / (this.gameScores.length));
    },
    threePointers: [3, 5, 7],
    averageScorethreePointers: function () {
        var sum = 0;
        this.threePointers.forEach(function (element) {
            sum += element;
        });
        return (sum / (this.threePointers.length));
    },
    twoPointers: [2, 8, 6],
    averageScoretwoPointers: function () {
        var sum = 0;
        this.twoPointers.forEach(function (element) {
            sum += element;
        });
        return (sum / (this.twoPointers.length));
    },
    freeThrows: [1, 8, 4],
    averageScorefreeThrows: function () {
        var sum = 0;
        this.freeThrows.forEach(function (element) {
            sum += element;
        });
        return (sum / (this.freeThrows.length));
    }
};
console.log("player's aerage is " + player.averageScore() + ", three-pointers average is " + player.averageScorethreePointers() + "\n two-pointers average is " + player.averageScoretwoPointers() + " free-throws average is " + player.averageScorefreeThrows());
