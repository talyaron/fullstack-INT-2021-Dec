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
    twoPointers: [2, 8, 6],
    freeThrows: [1, 8, 4],
    averageScoreThrows: function () {
        var sum = 0;
        var averages = {
            threePointers: 0,
            twoPointers: 0,
            freeThrows: 0
        };
        this.threePointers.forEach(function (element) {
            sum += element;
        });
        averages.threePointers = sum / this.threePointers.length;
        this.twoPointers.forEach(function (element) {
            sum += element;
        });
        averages.twoPointers = sum / this.twoPointers.length;
        this.freeThrows.forEach(function (element) {
            sum += element;
        });
        averages.freeThrows = sum / this.freeThrows.length;
        return (averages);
    }
};
console.log(player.averageScoreThrows());
console.log("player's aerage is " + player.averageScore() + ", three-pointers average is " + player.averageScoreThrows().threePointers + "\ntwo-pointers average is " + player.averageScoreThrows().twoPointers + " free-throws average is " + player.averageScoreThrows().freeThrows);
