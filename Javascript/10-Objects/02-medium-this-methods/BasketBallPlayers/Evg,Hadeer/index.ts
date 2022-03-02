const Player = {
    name: "Michael Jordan",
    //Scores: [2, 3, 1, 3, 2, 2],
    ThreePointers:[3,3,3,3,3],
    FreeThrows:[1,1,1],
    TwoPionters:[2,2,2,2],
        AvverageScores: function () {

        let total = this.ThreePointers.length+this.FreeThrows.length+this.ThreePointers.length;
        let totalscore = this.ThreePointers.reduce((a, b) => a + b, 0)+ this.FreeThrows.reduce((a, b) => a + b, 0) + this.ThreePointers.reduce((a, b) => a + b, 0);
        let Average = totalscore/total;


        return `Our player today ${this.name} scored in the match ${totalscore} points
        from that he scored ${this.ThreePointers.length} times Three Pointer,
        he scored ${this.FreeThrows.length} times Free Throws 
        and he scored ${this.TwoPionters.length} times Two Pointers.
        His Average is ${Average.toFixed(2)}.  ` ;

    }
}


let test = Player.AvverageScores();
console.log(test); 
