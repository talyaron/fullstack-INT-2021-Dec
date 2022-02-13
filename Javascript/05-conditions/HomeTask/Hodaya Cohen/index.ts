var Brutosalary:number = 6450
//your tax reduction//
var tax1:number = 645
var tax2:number = 390
var tax3:number = 1119
var tax4:number = 1791
var tax5:number = 7801
var tax6:number = 5809
//your salary before tax//
var salary1:number = 6450
var salary2:number = 9241
var salary3:number = 14841
var salary4:number = 20621
var salary5:number = 42911
 //your salary arter tax//
var neto:number;
var tax:number;

if(Brutosalary<=6450){
    neto = (Brutosalary-tax1)
    tax = tax1+((Brutosalary-salary1)* .10)
    console.log ('Your bruto salary',Brutosalary)
    console.log('Your neto salary',Brutosalary-tax1)
    console.log('Tax',tax1)


}else if(Brutosalary>=6450&&Brutosalary<=9240){
    tax=tax2+((Brutosalary-salary2)*.14)
    neto=(Brutosalary-tax)
    console.log ('Your bruto salary',Brutosalary)
    console.log(tax)
    console.log(neto)
}
else if(Brutosalary>=9241&&Brutosalary<=14840){
    tax=tax3+((Brutosalary-salary2)*.20)
    neto=(Brutosalary-tax)
    console.log ('Your bruto salary',Brutosalary)
    console.log(tax)
    console.log(neto)
}
else if(Brutosalary>=14841&&Brutosalary<=20620){
    tax=tax4+((Brutosalary-salary2)*.31)
    neto=(Brutosalary-tax)
    console.log ('Your bruto salary',Brutosalary)
    console.log(tax)
    console.log(neto)
}
else if(Brutosalary>=20621&&Brutosalary<=42910){
    tax=tax5+((Brutosalary-salary2)*.35)
    neto=(Brutosalary-tax)
    console.log ('Your bruto salary',Brutosalary)
    console.log(tax)
    console.log(neto)
}
else if(Brutosalary>=42911&&Brutosalary<=55270){
    tax=tax6+((Brutosalary-salary2)*14)
    neto=(Brutosalary-tax)
    console.log ('Your bruto salary',Brutosalary)
    console.log(tax)
    console.log(neto)
}


