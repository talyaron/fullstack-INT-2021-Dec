var salary:number= 7000
var tax: number= 0


var firstlinesalary:number= 6450;
var firsttax:number= 0.90;

var scndlinesalarymin:number= 6451;
var scndlinesalarymax:number= 9240;
var scndlinesalarydif: number= scndlinesalarymin-scndlinesalarymax;
var scndtax:number= 0.86

var thirdlinesalarymin: number= 9241;
var thirdlinesalarymax: number= 14840;
var thirdlinesalarydif: number= thirdlinesalarymax-thirdlinesalarymin;
var thirdtax:number= 0.80

var fourthlinesalarymin: number= 14841
var fourthlinesalarymax: number= 20620
var fourthlinesalarydif: number= fourthlinesalarymax-fourthlinesalarymin
var fourthtax:number= 0.69


var fifthlinesalarymin: number= 20621
var fifthlinesalarymax: number= 42910
var fifthlinesalarydif: number= fifthlinesalarymax-fifthlinesalarymin
var fifthtax:number= 0.65


var sixthlinesalarymin: number= 42911
var sixthlinesalarymax: number= 55270
var sixthlinesalarydif: number= sixthlinesalarymax-sixthlinesalarymin
var sixthtax:number= 0.53


var lastlinesalary: number= 55271
var lasttax:number= 0.50



if (salary<=firstlinesalary){
    tax=tax+(salary*firsttax) 
} else if (salary<=scndlinesalarymax) {
    tax=tax+(firstlinesalary*firsttax + (salary-firstlinesalary)*scndtax)
} else if (salary<=thirdlinesalarymax){
    tax=tax+(firstlinesalary*firsttax + (scndlinesalarydif)*scndtax + (salary-scndlinesalarymax)*thirdtax)
} else if (salary<=fourthlinesalarymax){
    tax=tax+(firstlinesalary*firsttax + (scndlinesalarydif)*scndtax + (thirdlinesalarydif)*thirdtax + (salary-thirdlinesalarymax)*fourthtax)
} else if (salary<=fifthlinesalarymax){
    tax=tax+(firstlinesalary*firsttax + scndlinesalarydif)*scndtax + (thirdlinesalarydif)*thirdtax + (fourthlinesalarydif)*fourthlinesalarydif + (salary-fourthlinesalarymax)*fifthtax;
} else if (salary<=sixthlinesalarymax){
    tax=tax+(firstlinesalary*firsttax + (scndlinesalarydif)*scndtax + (thirdlinesalarydif)*thirdtax + (fourthlinesalarydif)*fourthtax + (fifthlinesalarydif)*fifthtax + (salary-fifthlinesalarymax)*sixthtax)
} else {
    tax=tax+(firstlinesalary*firsttax + (scndlinesalarydif)*scndtax + (thirdlinesalarydif)*thirdtax + (fourthlinesalarydif)*fourthtax + (fifthlinesalarydif)*fifthtax + (sixthlinesalarydif)*sixthtax+ (salary-sixthlinesalarymax)*lasttax)}


console.log(Math.floor(tax))
