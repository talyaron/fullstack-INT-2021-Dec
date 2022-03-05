var player = {
    name: 'Michael J',
    scores: [2, 3, 2, 4, 1],
    averageScores: function () {
        var sum = 0;
        var len = this.scores.length;
        for (var i = 0; i < len; i++) {
            sum += this.scores[i];
        }
        return sum / len;
    }
};
console.log(player.averageScores());
