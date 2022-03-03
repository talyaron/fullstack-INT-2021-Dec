var suprise1 = {
    good: "baloon",
    bad: "shabath"
};
var suprise2 = {
    good: "candy",
    bad: "fine"
};
var suprise3 = {
    good: "ball",
    bad: "flat tire"
};
var suprise4 = {
    good: "banana",
    bad: "broken heart"
};
var prizes = [suprise1, suprise2, suprise3, suprise4];
function SupriseBox(prizes) {
    var randomprize = prizes[Math.floor(Math.random() * prizes.length)];
    var random = Math.round(Math.random() * 2);
    if (random === 1) {
        return randomprize.good;
    }
    else if (random === 2) {
        return randomprize.bad;
    }
}
SupriseBox(prizes);
console.log(SupriseBox(prizes));
