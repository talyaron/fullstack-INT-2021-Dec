

const arr: Array<any> =['chubaka', 1 , 'mylord', 5 , 'charlie', 6, 'peter', 25, 15]
const peekaboo: any =prompt ('please write "numbers" or "string" to get the desired thing')




if (peekaboo.toLowerCase() == "numbers"){
    
    var numbers = arr.filter(numbersOnly);
    function numbersOnly(value) {
        
        
        if (typeof (value)=== "number") {
            return console.log(value);
        }
    }
    
}    
else if (peekaboo.toLowerCase() == "string"){
    
    var string = arr.filter(stringOnly);
    function stringOnly(string) {
        
        
        if (typeof (string)=== "string") {
            return console.log(string);
        }
    }
}
else if(peekaboo.toLowerCase()) { 
    
    const error = alert('there is an error, please write "numbers" or "string"');{}
   

    console.log( error )}

    
