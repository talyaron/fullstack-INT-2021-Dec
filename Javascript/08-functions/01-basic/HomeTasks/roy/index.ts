//function 1//

function tell( numberofchildren:number, partnername:string, geoplce:string, jobtitle:string):any{
 if(numberofchildren>0){
     return `you will have `+ numberofchildren*2 +` children` +` you will be marry ` +partnername+ ` you will live at `+ geoplce+ ` you will work as a`
    +` full stack developer ` }
    else (numberofchildren=0) 
        return `you will have `+ ` 5 children ` +` you will be marry ` +partnername+ ` you will live at `+ geoplce+ ` you will work as a `
        +` full stack developer `
        
    }

const a =tell(0, `yael`,`LA`, `teacher` );
console.log(a)



//function 2//

function yod(age :number):any{
    
        return `your dog age is `+ age*7+ ` yo in dogs years` 
    }
const b =yod(2)
console.log(b)


//function 3//

function suplly( age:number, apd:number):any{
return `you will need ` +((80-age)*365*apd)+ `$` +` to last until the ripe age at 80 `
}
const c =suplly(24,10)
console.log(c)

//function 4+5//

function circumference(r:number):any{
console.log( `the circumference is `+ 2*(Math.PI)*r)
}
circumference(10)

function area(r:number):any{
    console.log( `the area is `+ (Math.PI)*(Math.pow(r,2)))
}
area(10)

//function 6+7//

function ctf(celsiusdegrees:number):any{
    console.log( celsiusdegrees+ `c is ` +(celsiusdegrees*(9/5)+32)+ `f`)
}
ctf(20)

function ftc(fahrenheitdegrees:number):any{
    console.log( fahrenheitdegrees+ `f is ` +((fahrenheitdegrees-32)*5/9)+ `c`)
}
ftc(80)