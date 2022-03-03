interface BasketBall {
    name: string;
    scores: Array<number>;
    averageScores:any;
}

const player: BasketBall = {
    name: 'Michael J',
    scores: [2, 3, 2, 4, 1],

    averageScores: function (){
        let sum = 0;
        let len = this.scores.length;

        for (let i = 0; i < len; i++) {
            sum += this.scores[i];
        }

        return sum/len;
    }
}

console.log(player.averageScores())




