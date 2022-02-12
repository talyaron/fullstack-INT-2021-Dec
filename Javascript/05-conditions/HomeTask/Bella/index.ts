// tax calculator

var tax: number = 0;
var salary: number = 60000;

var lvl1max: number = 6450; // 1 - level salary - maximum 
var lvl1per: number = 0.1;  // 1 - level percentage 10% - tax cut

var lvl2min: number = 6451; // 2 - level salary - minimum 
var lvl2max: number = 9240; // 2 - level salary - maximum 
var lvl2dif: number = lvl2max - lvl2min; // 2 - level differences 
var lvl2per: number = 0.14; // 2 level percentage 14% - tax cut

var lvl3min: number = 9241;  // 3 - level salary - minimum 
var lvl3max: number = 14840; // 3 - level salary - maximum 
var lvl3dif: number = lvl3max - lvl3min; // 3 - level differences 
var lvl3per: number = 0.2; // 3 - level percentage 20% - tax cut

var lvl4min: number = 14841; // 4 - level salary - minimum 
var lvl4max: number = 20620; // 4 - level salary - maximum 
var lvl4dif: number = lvl4max - lvl4min; // 4 - level differences 
var lvl4per: number = 0.31; // 4 - level percentage 31% - tax cut

var lvl5min: number = 20621; // 5 - level salary - minimum 
var lvl5max: number = 42910; // 5 - level salary - maximum 
var lvl5dif: number = lvl5max - lvl5min; // 5 - level differences 
var lvl5per: number = 0.35; // 5 - level percentage 35% - tax cut

var lvl6min: number = 42911; // 6 - level salary - minimum 
var lvl6max: number = 55270; // 6 - level salary - maximum 
var lvl6dif: number = lvl6max - lvl6min; // 6 - level differences 
var lvl6per: number = 0.47; // 6 - level percentage 47% - tax cut

var lvl7per: number = 0.5; // 7 - level percentage 50% - tax cut



// 1 - level salary
if (salary <= lvl1max) {
    tax = tax + (salary * lvl1per)
    console.log("You pay 10% tax. your total tax amount is: ₪" + Math.round(tax) + " from ₪" + salary.toFixed() + " salary.")

    // 2 - level salary    
} else if (salary <= lvl2max) {
    tax = tax + (lvl1max * lvl1per + (salary - lvl1max) * lvl2per)
    console.log("You pay 14% tax. your total tax amount is: ₪" + Math.round(tax) + " from ₪" + salary.toFixed() + " salary.")

    // 3 - level salary
} else if (salary <= lvl3max) {
    tax = tax + (lvl1max * lvl1per + (lvl2dif) * lvl2per + (salary - lvl2max) * lvl3per)
    console.log("You pay 20% tax. your total tax amount is: ₪" + Math.round(tax) + " from ₪" + salary.toFixed() + " salary.")

    // 4 - level salary
} else if (salary <= lvl4max) {
    tax = tax + (lvl1max * lvl1per + (lvl2dif) * lvl2per + (lvl3dif) * lvl3per + (salary - lvl3max) * lvl4per)
    console.log("You pay 31% tax. your total tax amount is: ₪" + Math.round(tax) + " from ₪" + salary.toFixed() + " salary.")

    // 5 - level salary
} else if (salary <= lvl5max) {
    tax = tax + (lvl1max * lvl1per + (lvl2dif) * lvl2per + (lvl3dif) * lvl3per + (lvl4dif) * lvl4per + (salary - lvl4max) * lvl5per)
    console.log("You pay 35% tax. your total tax amount is: ₪" + Math.round(tax) + " from ₪" + salary.toFixed() + " salary.")

    // 6 - level salary
} else if (salary <= lvl6max) {
    tax = tax + (lvl1max * lvl1per + (lvl2dif) * lvl2per + (lvl3dif) * lvl3per + (lvl4dif) * lvl4per + (lvl5dif) * lvl5per + (salary - lvl5max) * lvl6per)
    console.log("You pay 47% tax. your total tax amount is: ₪" + Math.round(tax) + " from ₪" + salary.toFixed() + " salary.")
}

// 7 - level salary
else {
    tax = tax + (lvl1max * lvl1per + (lvl2dif) * lvl2per + (lvl3dif) * lvl3per + (lvl4dif) * lvl4per + (lvl5dif) * lvl5per + (lvl6dif) * lvl6per + (salary - lvl6max) * lvl7per)
    console.log("You pay 50% tax. your total tax amount is: ₪" + Math.round(tax) + " from ₪" + salary.toFixed() + " salary.")
}




