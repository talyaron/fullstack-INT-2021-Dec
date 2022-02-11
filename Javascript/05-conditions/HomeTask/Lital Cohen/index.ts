var Brutosalary: number = 7735;
var step1: number = 645;
var step2: number = 390;
var step3: number = 1112;
var step4: number = 1792;
var step5: number = 7801;
var step6: number = 5809;
var step7: number = 27635;
var minstep1: number = 6450;
var minstep2: number = 9241;
var minstep3: number = 14841;
var minstep4: number = 20621;
var minstep5: number = 42911;
var minstep6: number = 55271;

var netosalary: number;
var tax: number;

if (Brutosalary <= 6450) {
    netosalary = (Brutosalary - step1)
    tax = ((Brutosalary) * .1)
    console.log('Your bruto salary' ,Brutosalary)
    console.log('Tax' ,tax)
    console.log('Your neto salary:' ,netosalary)
} else if (Brutosalary >= 6450 && Brutosalary <= 9240) {
    tax = step1 + ((Brutosalary - minstep1) * .14)
    netosalary = (Brutosalary - tax)
    console.log('Your bruto salary' ,Brutosalary)
    console.log('Tax' ,tax)
    console.log('Your neto salary:' ,netosalary)
} else if (Brutosalary >= 9241 && Brutosalary <= 14840) {
    tax = (step1 + step2) + ((Brutosalary - minstep2) * .20)
    netosalary = (Brutosalary - tax)
    console.log('Your bruto salary' ,Brutosalary)
    console.log('Tax' ,tax)
    console.log('Your neto salary:' ,netosalary)
} else if (Brutosalary >= 14841 && Brutosalary <= 20620) {
    tax = (step1 + step2 + step3) + ((Brutosalary - minstep3) * .31)
    netosalary = (Brutosalary - tax)
    console.log('Your bruto salary' ,Brutosalary)
    console.log('Tax' ,tax)
    console.log('Your neto salary:' ,netosalary)
} else if (Brutosalary >= 20621 && Brutosalary <= 42910) {
    tax = (step1 + step2 + step3 + step4) + ((Brutosalary - minstep4) * .35)
    netosalary = (Brutosalary - tax)
    console.log('Your bruto salary' ,Brutosalary)
    console.log('Tax' ,tax)
    console.log('Your neto salary:' ,netosalary)
} else if (Brutosalary >= 42911 && Brutosalary <= 55270) {
    tax = (step1 + step2 + step3 + step4 + step5) + ((Brutosalary - minstep5) * .47)
    netosalary = (Brutosalary - tax)
    console.log('Your bruto salary' ,Brutosalary)
    console.log('Tax' ,tax)
    console.log('Your neto salary:' ,netosalary)
} else if (Brutosalary >= 55271) {
    tax = (step1 + step2 + step3 + step4 + step5 + step6) + ((Brutosalary - minstep5) * .50)
    netosalary = (Brutosalary - tax)
    console.log('Your bruto salary' ,Brutosalary)
    console.log('Tax' ,tax)
    console.log('Your neto salary:' ,netosalary)
}
