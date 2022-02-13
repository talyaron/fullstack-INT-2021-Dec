var Bruto;
var TAX = 0;
var neto;
var tempBalance; // to calculate how much left for next tax stage
var taxStageCount = 0;
var max_Stage;
var tax_Percentage;
var previousStage = 0;
//-----------------HELP FUNCTION TO CALC AND CLEAN CODE פונקציית עזר לקריאה רקרוסיבית וקוד נקי וברור
function calcTax(balance, maxStage, taxPrecentage) {
    if (balance > 0 && balance <= maxStage) {
        // in case of final stage
        TAX = TAX + (tempBalance * taxPrecentage);
        tempBalance = 0;
        taxStageCount++; // Documant what stage of TAX is
    }
    else if (balance > 0 && balance > maxStage) {
        // in case more tax to take for next stage ..
        TAX = TAX + (maxStage - previousStage) * taxPrecentage;
        tempBalance = tempBalance - maxStage;
        taxStageCount++; // Documant what stage of TAX is
    }
    previousStage = maxStage;
}
//----------------------------------------------------
Bruto = 60000;
debugger;
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
console.log("\u05E2\u05D1\u05D5\u05E8 \u05E9\u05DB\u05E8 \u05D1\u05E8\u05D5\u05D8\u05D5: " + Bruto + " \u05EA\u05D7\u05D5\u05D9\u05D1 \u05D1\u05DE\u05E1 \u05D4\u05DB\u05E0\u05E1\u05D4 \u05D1\u05E1\u05DA: " + TAX + " \u05DC\u05E4\u05D9 \u05DE\u05D3\u05E8\u05D2\u05EA \u05DE\u05E1: " + taxStageCount + " \u05D5\u05E9\u05DB\u05E8 \u05D4\u05E0\u05D8\u05D5 \u05E9\u05DC\u05DA \u05D9\u05D4\u05D9\u05D4: " + neto);
//  ----- debug Notes for  tests
// console.log(Bruto);
// console.log(TAX);
// console.log(taxStageCount);
// console.log(neto);
// console.log("check that temp is 0 at final calc :" + tempBalance);
