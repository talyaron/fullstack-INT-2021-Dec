var radius: number = 4 // defining radius
var radius3: number = Math.pow(radius, 3); // radius power by the three
var vol: number = (radius3 * Math.PI * 4) / 3 // insert into equation
console.log(vol) // console the answer


//lottery assimment 
//זכיתם בפרס בין מאה שקל לשמונים מיליון, 
//מס הכנסה לוקח חמישים אחוזים, כמה קיבלתם? מספר ראנדומאלי

var min: number = 100 // defining min
var max: number = 80000000 // defining max
var result: number = getRandomArbitrary(min, max) //inserting function result into var


//running functuion
function getRandomArbitrary(min, max) {
    var result = Math.random() * (max - min) + min;
    return result
}

console.log(result) // printing result

var win:number = Math.ceil(result/2) // calculating taxes

console.log(`Congratulation! You won ${win}$`) // printing outcome

