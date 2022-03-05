interface Player {
    name: string;
    numberOfScores: number;
    freeShoots: number;
    threePointer: number;
    twoPointer: number;
}
const BasketballPlayer = {
    name: `antoni parker`,
    numberOfScores: [5, 11, 40, 20, 16, 30],
    freeShoots: [40, 30, 10, 35, 50],
    threePointer: [33, 49, 57, 41, 3],
    twoPointer: [20, 30, 40, 50, 60],

    introduction: function (): any {
        return `hi my name is ${this.name} im player at maccabi tel-aviv`
    },
    avregeScores: function (numberOfScores) {
        for (let i = 0; i > numberOfScores.length; i++) {
            let scoresTotals = numberOfScores.map(i / numberOfScores.length);

        };

    }


};
let kda = BasketballPlayer.avregeScores;
console.log(kda);