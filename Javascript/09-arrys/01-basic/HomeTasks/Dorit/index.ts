let a:Array<any> = ["Dorit","irit","eilon","Esther","Ronit","Rivka","Alon","Luisa","Anna"];
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

for(let i:number=0;i<a.length;i++){
    console.log(`Welcom ${a[i]}`);
}

var b:Array<number> = [50,150,2,15,25,3,1,1.5,3.5,7.5,17,18]
for(let i:number=0;i<b.length;i++){
    if (b[i]>5){
        alert(`this number is bigger than 5 ${b[i]}`)
    }
}


var c:Array<any> = ['abc',550,5.75,'$',add,false ]
function add(a:number, b:number):number{
    return a+b
}
//debugger
for(let i:number=0; i<c.length; i++){
    console.log(typeof(c[i]))
    if (typeof(c[i]) == "function"){
        var result:number = c[i](5,8)
        console.log(`the result is ${result}`)
   }
   
}

var d:Array<number> = []
//Populating the array
for(let i:number=0;i<15;i++){
    d[i]=Math.random()*100
}

var result:number = 0;
//function gets the array and returns the addition of all numbers in the array divided by it's length
function average(a:Array<number>):number{
    for(let i:number=0;i<a.length;i++){
       result += d[i] 
    }
    result /= d.length
    return result
}
//display of the average rounded to 2 positions after the decimal point
console.log(`the average of the array is ${Math.round(average(d)*100)/100}`)








