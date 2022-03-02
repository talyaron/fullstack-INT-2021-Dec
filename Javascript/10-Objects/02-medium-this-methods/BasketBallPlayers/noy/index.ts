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
    twoPointers: [2,8,6],
    freeThrows: [1,8,4],
    averageScoreThrows: function() {
        let sum:number = 0;
        let averages = {
            threePointers: 0,
            twoPointers: 0,
            freeThrows: 0,
        }

        this.threePointers.forEach(element => {
            sum+=element;
        })
        averages.threePointers = sum/this.threePointers.length;
        sum = 0;
        this.twoPointers.forEach(element => {
            sum+=element;
        })
        averages.twoPointers = sum/this.twoPointers.length;
        sum=0;
        this.freeThrows.forEach(element => {
            sum+=element;
        })
        averages.freeThrows = sum/this.freeThrows.length;
        
        return (averages);
    },

};
console.log(player.averageScoreThrows())
console.log(`player's aerage is ${player.averageScore()}, three-pointers average is ${player.averageScoreThrows().threePointers}
two-pointers average is ${player.averageScoreThrows().twoPointers} free-throws average is ${player.averageScoreThrows().freeThrows}`);
