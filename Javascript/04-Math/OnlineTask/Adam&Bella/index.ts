// var radius = 4;
// var volume = (4/3)* Math.PI * Math.pow(radius, 3);

// console.log('Volume of Sphere: '+volume.toFixed(2));



// var prize: number=Math.ceil(Math.random()*(8000000-100)-100)
// console.log(prize)
// const mas:number=0.5
// console.log(mas)
// var neto:number=prize*mas
// console.log(neto)

    var button = document.getElementById("button");

    button.onclick = function() {

    var salary:any = document.getElementById("salary");
    salary.value = 0;

    var salaryOut:any = document.getElementById("salaryOut");
    salaryOut.value = salary;

    var salaryOut:any  = document.getElementById("taxOut");
    salaryOut.value = parseFloat(salaryOut.value);

    if(salaryOut.value<450000) {
        salaryOut.value = salaryOut.value * .28;
    } 
    else {
        salaryOut.value = salaryOut.value * .32;
    }
        salaryOut.innerHTML = ("Your salary is NOK: " + salary.value + ",-");   
        salaryOut.innerHTML = "You should pay NOK: " + salaryOut.value + ",-";
    }           
