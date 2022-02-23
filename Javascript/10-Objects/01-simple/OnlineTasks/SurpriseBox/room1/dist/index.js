var surprise1 = {
    prize: "baloon",
    penalty: "-5 NIS"
};
var surprise2 = {
    prize: "toy",
    penalty: "-10 NIS"
};
var surprises = [surprise1, surprise2];
function getSurprise(arrayOfSurprises) {
    var index = Math.floor(arrayOfSurprises.length * Math.random());
    console.log(index);
    var randomSur = Math.ceil(Math.random() * 2);
    console.log(randomSur);
    console.log(arrayOfSurprises[index]);
    if (randomSur === 1) {
        return ("you won " + surprise1.prize);
    }
    else {
        return ("you got a " + surprise1.penalty);
    }
}
getSurprise(surprises);
