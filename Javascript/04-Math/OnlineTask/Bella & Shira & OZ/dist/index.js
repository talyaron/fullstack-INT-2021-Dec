//between (100 - 80,000,000) - 50%
var L = (Math.ceil((Math.random()) * 100 + 79999900));
console.log(L);
// would you pay taxes?
//from 5500 up to 1000000000 - you will pay taxes
var minIncome = 5500;
var maxIncome = 1000000008; //if bigger than 1000000000 you will not pay taxes
if (minIncome > 5500 || maxIncome > 1000000000) {
    console.log('You will pay taxes');
}
else {
    console.log('You will not pay taxes');
}
