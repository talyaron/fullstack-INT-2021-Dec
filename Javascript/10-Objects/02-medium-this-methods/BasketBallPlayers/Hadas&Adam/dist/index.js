var PointsPG = [10, 15, 20, 25, 30];
var MJ = { scores: [10, 15, 20, 25, 30] };
//let NumberOfGames:Number=(5)
function Totalsn(Prec) {
    var sum = 0;
    for (var I = 0; I < Prec.length; I++) {
        sum += Prec[I];
    }
    return sum / Prec.length;
}
console.log("the average of points per game is " + Totalsn(PointsPG));
