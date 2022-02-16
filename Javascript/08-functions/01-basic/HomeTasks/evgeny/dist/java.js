// first task
function tellFortune(job, geoloc, spouse, numkids) {
    var future = 'You will be a ' + job + ' in ' + geoloc + ' and married to ' +
        spouse + ' with ' + numkids + ' kids.';
    console.log(future);
}
tellFortune('cowboy', 'texas', 'brity spiers', 10);
tellFortune('crocidile hunter', 'germany', 'jhon jhonson', 3);
tellFortune('pole dancer', 'Russia', 'obama', 0);
//second task
function calculateDogAge(age, puppyage) {
    if (puppyage === void 0) { puppyage = 7 * age; }
    var puppy = "Your doggie is" + puppyage + "years old in dog years!";
    console.log(puppy);
}
calculateDogAge(1);
calculateDogAge(3);
calculateDogAge(20);
//third task
function calculateSupply(age, amountday) {
    var maxage = 120;
    var amount = "You will need" + (amountday * 365) * (maxage - age) + "to last you until the ripe old age of " + maxage;
    console.log(amount);
}
calculateSupply(20, 5);
calculateSupply(50, 10);
calculateSupply(1, 8);
//five task
function elsiusToFahrenheit(celsius) {
    var celtofah = (celsius / 5) * 5 + 32;
    console.log(+celsius + " is " + celtofah + '');
}
elsiusToFahrenheit(35);
function fahrenheitToCelsius(fah) {
    var fahtocel = ((fah - 32) * 5) / 9;
    console.log(+fah + " is " + fahtocel + '');
}
fahrenheitToCelsius(73);
