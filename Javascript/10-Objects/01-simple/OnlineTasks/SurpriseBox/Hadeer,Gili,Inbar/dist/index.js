var FirstSurprise = {
    prize: "Pen",
    penalty: "-1$"
};
var SecondSurprise = {
    prize: "Mug",
    penalty: "-5$"
};
var ThirdSurprise = {
    prize: "RayBan Sunglasess",
    penalty: "-200$"
};
var FourthSurprise = {
    prize: "Chanel Watch",
    penalty: "-500$"
};
var FivthSurprise = {
    prize: "Vications in the Bahamas",
    penalty: "-100,000$"
};
var SixthSurprise = {
    prize: "BMW 320i",
    penalty: "-500,000 $"
};
var SurpriseArray = [FirstSurprise, SecondSurprise, ThirdSurprise, FourthSurprise, FivthSurprise, SixthSurprise];
function RandomSurprise(arrayOfSurprise) {
    var SurpriseNum = Math.floor(Math.random() * arrayOfSurprise.length);
    return (SurpriseNum);
}
function prizeOrPenalty(arrayOfSurprise, key1, key2, SurpriseNum) {
    var penaltyOrPrize = (Math.floor(Math.random() * 2)) + 1;
    if (penaltyOrPrize == 1) {
        var result = arrayOfSurprise[SurpriseNum][key1];
        alert("Your surprise is: " + result);
        return result;
    }
    else if (penaltyOrPrize == 2) {
        var result = arrayOfSurprise[SurpriseNum][key2];
        alert("You owe us: " + result);
        return result;
    }
}
var randomNumber = RandomSurprise(SurpriseArray);
var whatIsYourSurprise = prizeOrPenalty(SurpriseArray, "prize", "penalty", randomNumber);
console.log(whatIsYourSurprise);
