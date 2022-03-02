// create an object the describes a basketball player
// - name
// - an array that conatain number of scores per each game
// - a method which return the average score per game (sum of all score / number of games)
// - * create data for "three pointers", free-throws, tow-pointers, and the method showd return the average scores 
// for each type (with object that contain the results)


const player ={
    name: "Moshe",
    gameScores: [30,18,24],
    averageScore: function():number {
        let sum:number = 0;
        this.gameScores.forEach(element => {
            sum+=element;
        });
        return (sum/(this.gameScores.length));
    },
    threePointers: [3,5,7],
    averageScorethreePointers: function():number {
        let sum:number = 0;
        this.threePointers.forEach(element => {
            sum+=element;
        });
        return (sum/(this.threePointers.length));
    },
    twoPointers: [2,8,6],
    averageScoretwoPointers: function():number {
        let sum:number = 0;
        this.twoPointers.forEach(element => {
            sum+=element;
        });
        return (sum/(this.twoPointers.length));
    },
    freeThrows: [1,8,4],
    averageScorefreeThrows: function():number {
        let sum:number = 0;
        this.freeThrows.forEach(element => {
            sum+=element;
        });
        return (sum/(this.freeThrows.length));
    },

};

console.log(`player's aerage is ${player.averageScore()}, three-pointers average is ${player.averageScorethreePointers()}
 two-pointers average is ${player.averageScoretwoPointers()} free-throws average is ${player.averageScorefreeThrows()}`);
