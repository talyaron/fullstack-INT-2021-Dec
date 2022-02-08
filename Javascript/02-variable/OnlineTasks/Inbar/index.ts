var str:string = 'hello';
var str2:string = 'all';
var str3:string = str+str2;
var firstName:string = 'Inbar';
var lastName:string = 'Refael';
var email:string = 'inbarefael@gmail.com';
var phone:string = '0547776178';
var address:string = 'Beit Hillel'
var daysOfExpriensInCSS:number = -12;
var fullName:string = `${firstName} ${lastName}`;

console.log(str+str2);

console.log(str,str2); //with space

console.log(`${str} ${str2}`)

console.log(fullName);
console.log(`Hi ${firstName}, I know your last name. It is: ${lastName}`);
console.log(`your Email is,${email}`);
console.log(`I guess your cell number is,${phone}` );
console.log(`I love your village,${address}`);
console.log(`your days of experiance in CSS are ${daysOfExpriensInCSS}, you need to work harder.` );


