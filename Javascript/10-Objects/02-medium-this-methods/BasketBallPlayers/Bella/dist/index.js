// create an object the describes a basketball player
// - name
// - an array that conatain number of scores per each game
// - a method which return the average score per game (sum of all score / number of games)
var player = {
    name: "John Doe",
    numOfScores: [1, 8, 5, 7, 9, 1, 12, 2],
    //get average function -----------------------------------------------------------------
    getAvg: function () {
        var total = this.numOfScores.reduce(function (a, b) { return a + b; }, 0);
        return "The total score average is: " + total / this.numOfScores.length;
    }
};
console.log(player);
var average = player.getAvg();
console.log(average);
//reffered to the obj itself
