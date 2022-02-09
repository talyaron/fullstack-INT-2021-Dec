const salary = 1e9;

if (salary >= 5500 && salary <= 1e9) {
    console.log(`I earn ${salary}, so I have to pay MAS.`);
}
else if (salary < 5500){
    console.log(`I earn less than the minimum so I don't pay MAS. My salary: ${salary}.`);
}
else{
    console.log(`I earn too much! So I don't have to pay MAS. My salary: ${salary}.`);
}