// create an array of surprises
// each surprise should have the following properties
// - prize:string
// - penalty: number
var surprise = [
    {
        prize: "sticker",
        penalty: 5
    },
    {
        prize: "ring",
        penalty: 100
    },
    {
        prize: "baloon",
        penalty: 15
    },
    {
        prize: "necklace",
        penalty: 200
    },
    {
        prize: "juice",
        penalty: 12
    }
];
function rand(surprise) {
    var randomSurprise = Math.floor(Math.random() * surprise.length);
    var randomPP = Math.ceil(Math.random() * 2);
    var temp = surprise[randomSurprise];
    if (randomPP === 1) {
        return "You won a " + temp.prize;
    }
    else {
        return "You lost " + temp.penalty + "$";
    }
}
console.log(rand(surprise));
