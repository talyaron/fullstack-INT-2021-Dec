const basketAve = {
    name: "stive",
    scores: [7, 10, 13, 6, 4],//total is 40 pts
    scoreAve: function (): any {
        let ave: number = 0
        let sum: number = 0
        for (let i = 0; i < this.scores.length; i++) {
            sum = sum + this.scores[i];
            // ave = sum / this.scores.length;
        }
        ave = sum / this.scores.length;
        return ave //the ave is 8 is this case (40/5=8)
    }
}
let ave1: number = basketAve.scoreAve();
console.log(`The player average score for the last 5 games is: ${ave1}`)


  // ave=this.scores.forEach(element => {
        //     ave+=element

        // - * create data for "three pointers", free-throws, tow-pointers,
        //  and the method showd return the average scores for each type (with object that contain the results)
