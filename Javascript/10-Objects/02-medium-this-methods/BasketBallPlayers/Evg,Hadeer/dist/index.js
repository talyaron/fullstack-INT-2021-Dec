var Player = {
    name: "Michael Jordan",
    //Scores: [2, 3, 1, 3, 2, 2],
    ThreePointers: [3, 3, 3, 3, 3],
    FreeThrows: [1, 1, 1],
    TwoPionters: [2, 2, 2, 2],
    AvverageScores: function () {
        var total = this.ThreePointers.length + this.FreeThrows.length + this.ThreePointers.length;
        var totalscore = this.ThreePointers.reduce(function (a, b) { return a + b; }, 0) + this.FreeThrows.reduce(function (a, b) { return a + b; }, 0) + this.ThreePointers.reduce(function (a, b) { return a + b; }, 0);
        var Average = totalscore / total;
        return "Our player today " + this.name + " scored in the match " + totalscore + " points\n        from that he scored " + this.ThreePointers.length + " times Three Pointer,\n        he scored " + this.FreeThrows.length + " times Free Throws \n        and he scored " + this.TwoPionters.length + " times Two Pointers.\n        His Average is " + Average.toFixed(2) + ".  ";
    }
};
var test = Player.AvverageScores();
console.log(test);
