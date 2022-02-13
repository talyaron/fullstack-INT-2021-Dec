var taxlvl1 = 6450;
var taxlvl2 = 9240;
var taxlvl3 = 14840;
var taxlvl4 = 20620;
var taxlvl5 = 42910;
var taxlvl6 = 55270;
function returnValue() {
    var salary = parseInt(document.getElementById("userInput").value);
    if (salary <= taxlvl1) {
        salary = salary * 0.9;
        var persent = "10%";
        console.log(Math.round(salary));
    }
    else if (salary <= taxlvl2) {
        salary = salary * 0.86;
        persent = "14%";
    }
    else if (salary <= taxlvl3) {
        salary = salary * 0.80;
        persent = "20%";
    }
    else if (salary <= taxlvl4) {
        salary = salary * 0.69;
        persent = "31%";
    }
    else if (salary <= taxlvl5) {
        salary = salary * 0.65;
        persent = "35%";
    }
    else if (salary <= taxlvl6) {
        salary = salary * 0.53;
        persent = "47%";
    }
    else {
        persent = "50%";
    }
    document.getElementById("answer").innerHTML = " Your salary is " + Math.round(salary) + " Mas took " + persent;
}
