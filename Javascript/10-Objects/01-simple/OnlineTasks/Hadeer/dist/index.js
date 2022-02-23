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
function RandomSurprise(arrayOfSurprise, key) {
    var SurpriseNum = Math.floor(Math.random() * arrayOfSurprise.length);
    console.log(SurpriseNum);
}
