console.log('hi');
// מחשבון שאתה מכניס גבר או אישה, ומחשב לך את אחוז החיים לפי תוחלת החיים
function ageCalc(sex, age, firstName) {
    if (sex == 'male') {
        var maxLife = 81;
        var precent = age / maxLife * 100;
        console.log("Hello " + firstName + ", you are a " + sex + ". your age is " + age + " and you have completed " + precent + " of life.");
    }
    else if (sex == 'female') {
        var maxLife = 84.5;
        var precent = age / maxLife * 100;
        console.log("Hello " + firstName + ", you are a " + sex + ". your age is " + age + " and you have completed " + precent + " of life.");
    }
    else {
        alert("Wrong information! " + sex + " is not an approved gender");
    }
}
var male1 = ageCalc('male', 26, 'hanan');
var female1 = ageCalc('female', 27, 'gili');
var wrong = ageCalc('dont know', 27, 'gili');
