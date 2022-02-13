var salary:number = 25000
console.log(salary);

var mas6450:number = 0.1
console.log(mas6450);

var mas9240:number = 0.14
console.log(mas9240);

var mas14840:number = 0.2
console.log(mas14840);

var mas20620:number = 0.31
console.log(mas20620);

var mas42910:number = 0.35
console.log(mas42910);

var mas55270:number = 0.47
console.log(mas55270);

var masmax:number = 0.50
console.log(masmax);


if (salary < 6450)
console.log("your tax is 10%, your neto salary is" salary-(salary*mas6450)

else if (salary >= 6450 && salary < 9240)
console.log("your highest tax is 14%, you neto salary is" salary-645-((salary-6450)*mas9240)

else if (salary >= 9240 && salary < 14840)
console.log("your highest tax is 20%, you neto salary is" salary-645-390-((salary-9240)*mas14840)

else if (salary >= 14840 && salary < 20620)
console.log("your highest tax is 31%, you neto salary is" salary-645-390-1120-((salary-14840)*mas20620)

else if (salary >= 20620 && salary < 42910)
console.log("your highest tax is 35%, you neto salary is" salary-645-390-1120-1155-((salary-20620)*mas42910)

else if (salary >= 42910 && salary < 55270)
console.log("your highest tax is 47%, you neto salary is" salary-645-390-1120-1155-7801-((salary-42910)*mas55270)

else  if (salary >= 55270)
console.log("your damn rich, your highest tax is 50%, you neto salary is" salary-645-390-1120-1155-7801-5808-((salary-55270)*masmax)
