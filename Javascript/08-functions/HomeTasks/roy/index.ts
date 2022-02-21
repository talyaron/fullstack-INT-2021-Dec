const arr:Array<any>= ["a","c",4,"d",1,2,3,"b"]



const a= arr.filter(elm=>typeof elm === `number`);
const b= arr.filter(elm=>typeof elm === 'string');



arr.forEach(elm=>{
    try {
        if(typeof elm=== "number"){
            console.log(a)
            }
            else if(typeof elm==="string") 
            { console.log(b)}
            else{
                console.log(`that value is unfit`)
            }

        
    } catch (error) {
        console.log(error)
    }
}
)
