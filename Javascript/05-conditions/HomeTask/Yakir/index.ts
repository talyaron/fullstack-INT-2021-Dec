var Bruto: number;
var TAX: number = 0;
var neto: number;
var tempBalance: number; // to calculate how much left for next tax stage
var taxStageCount: number = 0;

var max_Stage: number;
var tax_Percentage: number;

//-----------------HELP FUNCTION TO CALC AND CLEAN CODE פונקציית עזר לקריאה רקרוסיבית וקוד נקי וברור
function calcTax(balance: number, maxStage: number, taxPrecentage: number) {
  if (balance > 0 && balance <= maxStage) {
    // in case of final stage
    TAX = TAX + (tempBalance * taxPrecentage);
    tempBalance = 0;
    taxStageCount++; // Documant what stage of TAX is


  } else if (balance > 0 && balance > maxStage) {
    // in case more tax to take for next stage ..
    TAX = TAX + maxStage * taxPrecentage;
    tempBalance = tempBalance - maxStage;
    taxStageCount++; // Documant what stage of TAX is
  }
}
//----------------------------------------------------

Bruto = 10000;

tempBalance = Bruto; // using temp Balance

//-------------------------- stage 1
max_Stage = 6450;
tax_Percentage = 0.1;
calcTax(tempBalance, max_Stage, tax_Percentage);
//-------------------------- stage 2
max_Stage = 9240;
tax_Percentage = 0.14;
calcTax(tempBalance, max_Stage, tax_Percentage);
//-------------------------- stage 3
max_Stage = 14840;
tax_Percentage = 0.2;
calcTax(tempBalance, max_Stage, tax_Percentage);
//-------------------------- stage 4
max_Stage = 20620;
tax_Percentage = 0.31;
calcTax(tempBalance, max_Stage, tax_Percentage);
//-------------------------- stage 5
max_Stage = 42910;
tax_Percentage = 0.35;
calcTax(tempBalance, max_Stage, tax_Percentage);
//-------------------------- stage 6
max_Stage = 55270;
tax_Percentage = 0.47;
calcTax(tempBalance, max_Stage, tax_Percentage);
//-------------------------- stage 7
// after stage 6 it is 50% tax
if (tempBalance > 0) {
  tax_Percentage = 0.5;
  TAX = TAX + tempBalance * tax_Percentage;
  tempBalance = 0;
}

neto = Bruto - TAX;

console.log(
    `עבור שכר ברוטו: ${Bruto} תחויב במס הכנסה בסך: ${TAX} לפי מדרגת מס: ${taxStageCount} ושכר הנטו שלך יהיה: ${neto}`
  );

//  ----- debug Notes for  tests
// console.log(Bruto);
// console.log(TAX);
// console.log(taxStageCount);
// console.log(neto);
// console.log("check that temp is 0 at final calc :" + tempBalance);


