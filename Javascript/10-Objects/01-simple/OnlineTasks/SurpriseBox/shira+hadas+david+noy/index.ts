// create an array of surprises
// each surprise should have the following properties
// - prize:string
// - penalty: number

// create a function which gets the array.
// the function will chose a random surprise.
// and the function will retrun the prize or the penalty in random order


// [
// {baloon / -5 NIS}
// {toy / -10 NIS}
// ]

interface Surprise {
    prize: string,
    penalty: number
}
const surprise: Array<Surprise> = [
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
]

function rand(surprise: Array<Surprise>):string {
    let randomSurprise: number = Math.floor(Math.random() * surprise.length);
    let randomPP: number = Math.ceil(Math.random() * 2);
    let temp = surprise[randomSurprise];
    if (randomPP===1){
    return `You won a ${temp.prize}`;
    } else {
        return `You lost ${temp.penalty}$`;
    }
}

console.log(rand(surprise));
