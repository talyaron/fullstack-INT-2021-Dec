interface Player {
    name:string,
    gameScore:Array<number>,
    getScoreAvg: any
    threePointers:Array<number>
    freeThrows:Array<number> 
    towPointers:Array<number>
}

const playerOne={
    name:"Meir",
    gameScore:[32, 24, 22, 19, 20],
    getScoreAvg: function():string{
        let scoreSum=0
        this.gameScore.forEach(element => {
            scoreSum=scoreSum+ element
        });
        let avg= scoreSum / this.gameScore.length
        return `${this.name} has an average score of ${avg}`
    },
    threePointers:[3, 7, 1, 0, 2],
    GetAvgThreePointers: function():string{
        let scoreSum=0
        this.threePointers.forEach(element => {
            scoreSum=scoreSum+ element
        });
        let avg= scoreSum / this.threePointers.length
        return `${this.name} has an average score of ${avg} in Three Pointers`
    },
    freeThrows:[2, 1, 0, 1, 3],
    GetAvgFreeThrows: function():string{
        let scoreSum=0
        this.freeThrows.forEach(element => {
            scoreSum=scoreSum+ element
        });
        let avg= scoreSum / this.freeThrows.length
        return `${this.name} has an average score of ${avg} in Free Throw`
    },
    towPointers:[3, 4, 2, 1, 5],
    GetAvgTowPointers: function():string{
        let scoreSum=0
        this.towPointers.forEach(element => {
            scoreSum=scoreSum+ element
        });
        let avg= scoreSum / this.towPointers.length
        return `${this.name} has an average score of ${avg} in Tow Pointers`
    }
}
const PlayerOneAvg=playerOne.getScoreAvg();
console.log(PlayerOneAvg)

const playerOneAvgTWO=playerOne.GetAvgThreePointers();
console.log(playerOneAvgTWO)


const playerOneAvgThree=playerOne.GetAvgTowPointers();
console.log(playerOneAvgThree)


const playerOneAvgFour=playerOne.GetAvgFreeThrows();
console.log(playerOneAvgFour)