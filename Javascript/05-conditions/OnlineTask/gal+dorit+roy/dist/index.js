// you pay taxes if you earn more than 5500 NIS or you earn more than 1000000000 NIS;
// set a sallary, and tell if you should pay taxes. 
var salary = 6000;
console.log(salary);
var pay = 5500;
console.log(pay);
if (salary >= 5500 && salary <= 1E9) {
    console.log('you should pay tax');
}
else {
    console.log('you tax free');
}
