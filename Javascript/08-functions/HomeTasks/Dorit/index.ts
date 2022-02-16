function tellFortune(Kids:number, partName:string, location:string, jobTitle:string)
{
    if (Kids==1 && partName[0] =='a' && location =='tel aviv' && jobTitle=='developer'){
         return `you will have ${Kids+2} kids and will live in Jerusalem and will stay married to ${partName}`
    } else if (Kids>5 &&location!='tel aviv' && jobTitle!='computer science'){
        return `you'll have no more children you will live outside Tel Aviv and have a new job soon`
    }
    else{
         return `you'll have ${Kids+1} kids, and you will live in ${location} for another 5 years you will stay with ${partName} and you will work as a ${jobTitle}`;
    }
}


function  calculateDogAge(name:string, age:number, factor:number){
    return `${name}'s age in dogie's years is aproximatly: ${Math.round(age*factor)}`
}

function calculateSupply(age:number, amount:number, nameOfSuply:string, gender:string){
    const expectMan = 81;
    const expectWoman = 84.5;
    let restOfLife:number = 0;
    if (gender=='man'){
        restOfLife = expectMan - age;
    } else if (gender == 'woman'){
        restOfLife = expectWoman - age;
    }    
        return `for the next ${restOfLife} years you will need ${amount*360*restOfLife} of ${nameOfSuply}` 
}

function calcCircle(areaOrCircum:string, radius:number){
    if (areaOrCircum=='circumfrence'){
        return `the circumfrence of the circle is: ${2*Math.PI*radius}`
    } else if (areaOrCircum=='area'){
        return `the area of the circle is ${Math.PI*Math.pow(radius, 2)}`
    }
}

function celsiusAndFarenheit(degreeSort:string, amount:number){
    if (degreeSort =='celsius'){
        return `the ${amount} degrees of celsius is in farenheit ${Math.round(amount*5/9+32)}` 
    } else if (degreeSort == 'farenheit'){
        return `the ${amount} degrees of farenheit is in celsius ${Math.round((amount - 32)/1.8)} degrees`
    }
}

function findTime(distance:number, velocity:number){
    return distance/velocity
}

let dist:number = +prompt("what is your distance")
let vel:number = +prompt("what is your velocity")
let time:number = findTime(dist,vel)
console.log(`time is ${time}`)

//const a = tellFortune(1, 'Guy', 'hod hasharon', 'system analyst');
//const a = tellFortune(6, 'Arnon', 'Tel Aviv', 'story teller');
//const a = tellFortune(1, 'aharon', 'Tel Aviv', 'developer');

//const a = calculateDogAge('chupchik', 10, 7)
//const a = calculateDogAge('farid', 3, 7)
//const a = calculateDogAge('dogie', 13, 8)

//const a = calculateSupply(71, 5, 'choclate plates', 'woman')
//const a = calculateSupply(14, 5, 'bamba bags', 'man');
//const a = calculateSupply(71, 5, 'choclate plates', 'woman');

//const a = calcCircle('circumfrence', 5)
//const a = calcCircle('area', 2)
//const a = calcCircle('area', 25)

//const a = celsiusAndFarenheit('celsius', 30)
//const a = celsiusAndFarenheit('farenheit', 70)
//const a = celsiusAndFarenheit('celsius', 100)
console.log(a);

