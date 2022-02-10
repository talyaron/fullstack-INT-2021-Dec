function calcMasSteps (salary){
    
    var tax:number = 0;
    
    const lvl1max:number = 6450; // first level max salary
    const lvl1per:number = 0.1; // first level percentage 10%
    
    const lvl2min:number = 6451; // second level min salary 
    const lvl2max:number = 9240; // second level max salary 
    const lvl2dif:number = lvl2max-lvl2min;
    const lvl2per:number = 0.14; // second level percentage 14%
    
    const lvl3min:number = 9241; // third level min salary
    const lvl3max:number = 14840; // third level max salary
    const lvl3dif:number = lvl3max-lvl3min;
    const lvl3per:number = 0.2; // third level percentage 20%
    
    const lvl4min:number = 14841; // third level min salary
    const lvl4max:number = 20620; // forth level max salary
    const lvl4dif:number = lvl4max-lvl4min;
    const lvl4per:number = 0.31; // forth level percentage 31%
    
    const lvl5min:number = 20621; // fifth level min salary
    const lvl5max:number = 42910; // fifth level max salary
    const lvl5dif:number = lvl5max-lvl5min;
    const lvl5per:number = 0.35; // fifth level percentage 35%
    
    const lvl6min:number = 42911; // sixth level min salary
    const lvl6max:number = 55270; // sixth level max salary
    const lvl6dif:number = lvl6max-lvl6min;
    const lvl6per:number = 0.47; // sixth level percentage 47%
    
    const lvl7per:number = 0.5; // seventh level percentage 50%

    if (salary<=lvl1max){
        tax+=(salary*lvl1per) 
    } else if (salary<=lvl2max) {
        tax+=(lvl1max*lvl1per + (salary-lvl1max)*lvl2per)
    } else if (salary<=lvl3max){
        tax+=(lvl1max*lvl1per + (lvl2dif)*lvl2per + (salary-lvl2max)*lvl3per)
    } else if (salary<=lvl4max){
        tax+=(lvl1max*lvl1per + (lvl2dif)*lvl2per + (lvl3dif)*lvl3per + (salary-lvl3max)*lvl4per)
    } else if (salary<=lvl5max){
        tax+=(lvl1max*lvl1per + (lvl2dif)*lvl2per + (lvl3dif)*lvl3per + (lvl4dif)*lvl4per + (salary-lvl4max)*lvl5per)
    } else if (salary<=lvl6max){
        tax+=(lvl1max*lvl1per + (lvl2dif)*lvl2per + (lvl3dif)*lvl3per + (lvl4dif)*lvl4per + (lvl5dif)*lvl5per + (salary-lvl5max)*lvl6per)
    } else {
        tax+=(lvl1max*lvl1per + (lvl2dif)*lvl2per + (lvl3dif)*lvl3per + (lvl4dif)*lvl4per + (lvl5dif)*lvl5per + (lvl6dif)*lvl6per + (salary-lvl6max)*lvl7per)
    }
    
    return tax;
}


const form = document.querySelector('form');
const inputSalary = document.querySelector('#salaryAmount');
const newSalary = document.querySelector('h2');
const tax = document.querySelector('p');
form.addEventListener('submit', function (event){
    event.preventDefault();
    const taxTook = calcMasSteps(inputSalary.valueAsNumber);
    newSalary.innerText = (`סכום הנטו שלך: ${inputSalary.valueAsNumber - taxTook} ש"ח`);
    tax.innerText = (`סה"כ מס שנלקח ממך: ${taxTook} ש"ח`);
    //inputSalary.value = "";
})
