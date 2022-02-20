// Exercise 1:
const myArray:Array <any> = ['Shira','Hadar','Adi','Hila','Mika','Hadas','Noa']
for(let i=0; i<myArray.length; i++){
console.log(myArray[i]);


// Exercise 2:
console.log(` Welcome ${myArray[i]}`)

}


// Exercise 3:
const numberArr:Array <any> = [1,2,35,50,6,80,4,3,8,11,2]
for(let i=0; i<numberArr.length; i++){
    if(numberArr[i]>5)
    console.log(`The number : ${numberArr[i]} , is greater than 5`)
    }



// Exercise 4:
const typesArray:Array <any> = [2,'Shira','aa55@gmail.com',88,'Hadar',calcBigAge,200];
for (let i=0; i<typesArray.length; i++) {
    console.log(`The value type of ${typesArray[i]} is : ${typeof typesArray[i]}`);

    if(typeof typesArray[i] == 'function'){
       console.log(`The function result: ${typesArray[i](50,20)}`)
    }
   
}

// The function get 2 ages and return the big age.
function calcBigAge(a:number,b:number){
    if(a>b)
    return a;
    else return b;
}


// Exercise 5:
const scoreAvarage:Array <number> = [100,85,90,95,80,100,75];
const sameLength:number = scoreAvarage.length;
let sum = 0;

function avg(sum,sameLength){
    for(let i=0; i<scoreAvarage.length; i++){
        sum+= scoreAvarage[i]
    }

    return (sum/scoreAvarage.length)
}
console.log(avg(sum,scoreAvarage.length))