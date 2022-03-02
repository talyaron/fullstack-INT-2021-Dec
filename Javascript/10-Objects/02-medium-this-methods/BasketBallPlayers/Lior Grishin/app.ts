interface Player{
    name:string
    gameScores:Array<number>
    averageScores():string
    gameInfo:{
        threePointers:Array<number>
        twoPointers:Array<number>
        freeThrow:Array<number>
    }
    gameInfoAverage():string
}

const lebron:Player = {
    name: 'lebron',
    gameScores: [50,60,20,30,52],
    averageScores: function():string {
        let total:number = 0;
        for(let organs of this.gameScores){
            total += organs
        }
        return `${this.name} played ${this.gameScores.length} games with average score of ${total/this.gameScores.length}`
    },
    gameInfo: {
        threePointers: [10, 5, 6, 4, 8],
        twoPointers: [9, 20, 1, 8, 12],
        freeThrow: [2, 5 , 0, 4, 4]
    },
    gameInfoAverage: function():string{
        let totalThree:number = 0;
        let totalTwo:number = 0;
        let totalFree:number =0;
        for(let i = 0; i < this.gameInfo.threePointers.length; i++){
            totalThree += this.gameInfo.threePointers[i]
        }
        for(let i = 0; i < this.gameInfo.twoPointers.length; i++){
            totalTwo += this.gameInfo.twoPointers[i]
        }
        for(let i = 0; i < this.gameInfo.freeThrow.length; i++){
            totalFree += this.gameInfo.freeThrow[i]
        }
        return `${this.name} scored ${totalThree/this.gameInfo.threePointers.length} three pointers on average, ${totalTwo/this.gameInfo.twoPointers.length} two pointers on average and ${totalFree/this.gameInfo.freeThrow.length} free thows!!!!`
    }
}

// create an object the describes a basketball player
// - name
// - an array that conatain number of scores per each game
// - a method which return the average score per game (sum of all score / number of games)
// - * create data for "three pointers", free-throws, two-pointers, and the method should return 
//     the average scores for each type (with object that contain the results)