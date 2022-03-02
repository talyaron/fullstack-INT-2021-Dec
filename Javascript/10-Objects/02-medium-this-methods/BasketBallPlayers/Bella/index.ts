// create an object the describes a basketball player
// - name
// - an array that conatain number of scores per each game
// - a method which return the average score per game (sum of all score / number of games)


// - * create data for "three pointers", free-throws, tow-pointers, and the method showd 
// return the average scores for each type (with object that contain the results)


//player obj ----------------------------------------------------------------------------
interface player {
  name: string,
    numOfScores: Array < number > ,
}

const player = {
  name: "John Doe",
  numOfScores: [1, 8, 5, 7, 9, 1, 12, 2],

  //get average function -----------------------------------------------------------------
  getAvg: function (): string {
    const total = this.numOfScores.reduce((a, b) => a + b, 0);
    return `${player.name}'s total score average is: ${total / this.numOfScores.length}`;
  }
};

console.log(player)
let average = player.getAvg()
console.log(average)
//reffered to the obj itself