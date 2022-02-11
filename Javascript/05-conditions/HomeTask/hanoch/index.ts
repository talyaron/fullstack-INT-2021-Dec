 var salary:number = 7700;
 
 
 var tax:number = salary * 0.10;
 

 var paar:number = salary - 6450;
 var tax1:number = paar * 0.14;
 var add:number = tax + tax1;

 var paar1:number = salary - 9240;
 var tax2:number = paar1 * 0.2;
 var add1:number = tax + tax1 + tax2;

 var paar2:number = salary - 14840;
 var tax3:number = paar2 * 0.31;
 var add2:number = tax + tax1 + tax2 + tax3;
 
 var paar3:number = salary - 20620;
 var tax4:number = paar3 * 0.35;
 var add3:number = tax + tax1 + tax2 + tax3 + tax4;

 var paar4:number = salary - 42910;
 var tax5:number = paar4 * 0.47;
 var add4:number = tax + tax1 + tax2 + tax3 + tax4 + tax5;

 var paar5:number = salary - 55270;
 var tax6:number = paar5 * 0.5;
 var add5:number = tax + tax1 + tax2 + tax3 + tax4 + tax5 + tax6;


 

 if (salary> 0 && salary <= 6450){
     console.log(tax)
 } else if(salary >= 6451 && salary <= 9240){
    console.log(add)
 } else if(salary >= 9241 && salary <= 14840){
     console.log(add1)
 } else if(salary >= 14841 && salary <= 20620){
    console.log(add2)
} else if(salary >= 20621 && salary <= 42910 ){
    console.log(add3)
} else if(salary >= 42911 && salary <= 55270){
    console.log(add4)
} else if(salary >= 55271){
    console.log(add5)
} 
 