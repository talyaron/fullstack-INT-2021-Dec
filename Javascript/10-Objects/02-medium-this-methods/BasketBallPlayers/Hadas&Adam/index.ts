interface nameOfThePlayer {
    name: string,
    scores:Array<number>
    
}
const PointsPG: Array<number> = [10, 15, 20, 25, 30];

const MJ={ scores : [10, 15, 20, 25, 30]}
//let NumberOfGames:Number=(5)
function Totalsn(Prec:Array<number>){
    let sum=0;
    for(let I=0;I<Prec.length;I++){
        sum+=Prec[I]

        
    }
return sum/Prec.length;

}
console.log(`the average of points per game is ${Totalsn(PointsPG)}`);


    
    








