var prize1 = {
    prize: "checkers",
    penalty: -15
};
var prize2 = {
    prize: "chess",
    penalty: -25
};
var prize3 = {
    prize: "lego",
    penalty: -150
};
var prize4 = {
    prize: "ferrari",
    penalty: -1500
};
var prizes = [prize1, prize2, prize3, prize4];
function getSurprise(prizes) {
    var sur = Math.floor(Math.random() * prizes.length);
    //console.log(sur)
    var rand = Math.round(Math.random());
    if (rand === 0) {
        return prizes[sur]['prize'];
    }
    else {
        return prizes[sur]['penalty'];
    }
}
console.log(getSurprise(prizes));
