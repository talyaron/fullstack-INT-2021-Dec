var BasketballPlayer = {
    name: "antoni parker",
    numberOfScores: [5, 11, 40, 20, 16, 30],
    freeShoots: [40, 30, 10, 35, 50],
    threePointer: [33, 49, 57, 41, 3],
    twoPointer: [20, 30, 40, 50, 60],
    introduction: function () {
        return "hi my name is " + this.name + " im player at maccabi tel-aviv";
    },
    avregeScores: function (numberOfScores) {
        for (var i = 0; i > numberOfScores.length; i++) {
            var scoresTotals = numberOfScores.map(i / numberOfScores.length);
        }
        ;
    }
};
var kda = BasketballPlayer.avregeScores;
console.log(kda);
