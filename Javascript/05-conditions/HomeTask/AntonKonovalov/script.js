
function fn1()
{
    const inputNumber = document.getElementById("user_salary_input").value;
    const userTax = document.getElementById("user_salary_tax");
    const userSalary = document.getElementById("user_salary_output");
    if (inputNumber <= 6450) {
        /* alert("המשכורת שלך: " + (inputNumber - (inputNumber*0.1))); */
        userSalary.innerHTML = (inputNumber - (inputNumber*0.1));
        userTax.innerHTML = (inputNumber*0.1);
    } else if (6450 < inputNumber && inputNumber <= 9240) {
        /* alert("המשכורת שלך: " + (inputNumber - (((inputNumber - 6450) * 0.14) + 645))); */
        userSalary.innerHTML = (inputNumber - (((inputNumber - 6450) * 0.14) + 645));
        userTax.innerHTML = (((inputNumber - 6450) * 0.14) + 645);
    } else if (9241 < inputNumber && inputNumber <= 14840) {
        /* alert("המשכורת שלך: " + (inputNumber - (((inputNumber - 9241) * 0.2) + 1029))); */
        userSalary.innerHTML = (inputNumber - (((inputNumber - 9241) * 0.2) + 1029));
        userTax.innerHTML = (((inputNumber - 9241) * 0.2) + 1029);
    } else if (14841 < inputNumber && inputNumber <= 20620) {
        /*alert("המשכורת שלך: " + (inputNumber - (((inputNumber - 14841) * 0.31) + 2457.86))); */
        userSalary.innerHTML = (((inputNumber - 14841) * 0.31) + 2457.86);
        userTax.innerHTML = (((inputNumber - 14841) * 0.31) + 2457.86);
    } else if (20621 < inputNumber && inputNumber <= 42910) {
        /* alert("המשכורת שלך: " + (inputNumber - (((inputNumber - 20621) * 0.35) + 3613.66))); */
        userSalary.innerHTML = (inputNumber - (((inputNumber - 20621) * 0.35) + 3613.66));
        userTax.innerHTML = (((inputNumber - 20621) * 0.35) + 3613.66);
    } else if (42911 < inputNumber && inputNumber <= 55270) {
        /* alert("המשכורת שלך: " + (inputNumber - (((inputNumber - 42911) * 0.47) + 10523.25))); */
        userSalary.innerHTML = (inputNumber - (((inputNumber - 42911) * 0.47) + 10523.25));
        userTax.innerHTML = (((inputNumber - 42911) * 0.47) + 10523.25);
    } else if (55271 <= inputNumber) {
        /* alert("המשכורת שלך: " + (inputNumber - (((inputNumber - 55271) * 0.5) + 16332))); */
        userSalary.innerHTML = (inputNumber - (((inputNumber - 55271) * 0.5) + 16332));
        userTax.innerHTML = (((inputNumber - 55271) * 0.5) + 16332);
    }
}
