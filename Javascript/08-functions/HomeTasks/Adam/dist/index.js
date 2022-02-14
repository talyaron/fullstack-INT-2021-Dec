var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
//function 1//
function fortuneteller(kids, partner, geo, job) {
    return ("you will be a " + job + " in " + geo + " and married to " + partner + " with " + kids + " kids");
}
var function1 = fortuneteller(2, "adam", "israel", "musician");
console.log(function1);
//function 2
function DAcalculate(dogyears) {
    return dogyears * 7;
}
var function2 = DAcalculate(10);
console.log("Your dooggie is " + function2 + " years old in dog years!");
//function 3
function calculateSupply(age, amountPD) {
    var MaxAge = 80;
    var sumAge = (MaxAge - age);
    var totalsupply = (amountPD * 365) * (sumAge);
    console.log("you will need " + totalsupply + " bottles of Cola to last you until the ripe old age " + MaxAge);
}
calculateSupply(22, 1);
//function 4
function CelTOFahr(celsius, CeltoFahr) {
    var CelConvertFahr = (celsius * 9) / 5 + 32;
    console.log($, { celsius: celsius }(__makeTemplateObject(["\u00B0C is"], ["\u00B0C is"])), $, { CelConvertFahr: CelConvertFahr }(__makeTemplateObject(["\u00B0F"], ["\u00B0F"])));
}
