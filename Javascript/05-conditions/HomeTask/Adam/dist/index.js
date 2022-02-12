var salary = 7000;
var tax = 0;
var firstlinesalary = 6450;
var firsttax = 0.90;
var scndlinesalarymin = 6451;
var scndlinesalarymax = 9240;
var scndlinesalarydif = scndlinesalarymin - scndlinesalarymax;
var scndtax = 0.86;
var thirdlinesalarymin = 9241;
var thirdlinesalarymax = 14840;
var thirdlinesalarydif = thirdlinesalarymax - thirdlinesalarymin;
var thirdtax = 0.80;
var fourthlinesalarymin = 14841;
var fourthlinesalarymax = 20620;
var fourthlinesalarydif = fourthlinesalarymax - fourthlinesalarymin;
var fourthtax = 0.69;
var fifthlinesalarymin = 20621;
var fifthlinesalarymax = 42910;
var fifthlinesalarydif = fifthlinesalarymax - fifthlinesalarymin;
var fifthtax = 0.65;
var sixthlinesalarymin = 42911;
var sixthlinesalarymax = 55270;
var sixthlinesalarydif = sixthlinesalarymax - sixthlinesalarymin;
var sixthtax = 0.53;
var lastlinesalary = 55271;
var lasttax = 0.50;
if (salary <= firstlinesalary) {
    tax = tax + (salary * firsttax);
}
else if (salary <= scndlinesalarymax) {
    tax = tax + (firstlinesalary * firsttax + (salary - firstlinesalary) * scndtax);
}
else if (salary <= thirdlinesalarymax) {
    tax = tax + (firstlinesalary * firsttax + (scndlinesalarydif) * scndtax + (salary - scndlinesalarymax) * thirdtax);
}
else if (salary <= fourthlinesalarymax) {
    tax = tax + (firstlinesalary * firsttax + (scndlinesalarydif) * scndtax + (thirdlinesalarydif) * thirdtax + (salary - thirdlinesalarymax) * fourthtax);
}
else if (salary <= fifthlinesalarymax) {
    tax = tax + (firstlinesalary * firsttax + scndlinesalarydif) * scndtax + (thirdlinesalarydif) * thirdtax + (fourthlinesalarydif) * fourthlinesalarydif + (salary - fourthlinesalarymax) * fifthtax;
}
else if (salary <= sixthlinesalarymax) {
    tax = tax + (firstlinesalary * firsttax + (scndlinesalarydif) * scndtax + (thirdlinesalarydif) * thirdtax + (fourthlinesalarydif) * fourthtax + (fifthlinesalarydif) * fifthtax + (salary - fifthlinesalarymax) * sixthtax);
}
else {
    tax = tax + (firstlinesalary * firsttax + (scndlinesalarydif) * scndtax + (thirdlinesalarydif) * thirdtax + (fourthlinesalarydif) * fourthtax + (fifthlinesalarydif) * fifthtax + (sixthlinesalarydif) * sixthtax + (salary - sixthlinesalarymax) * lasttax);
}
console.log(Math.floor(tax));
