const a:Array<String> = ["YEHUDA", 'moshe', 'david', 'israel']
console.log(a)
for(let i = 0; i<a.length;i++){
    console.log (`wellcome`a[i])
}


const b:Array<number> = [1, 8, 4, 7]
for(let o = 0; o < b.length; o++){
    //  console.log(b[o])
    if ( b[o] > 5){
        console.log("the number"b[o]"is beeger then 5 ")
    }
}



function multy(a:number, b:number){
    return a*b
}

        
const d:Array<any>=['hanoch',33,multy]
for(let j = 0; j < d.length; j++){
    console.log(typeof d[j])
    
    if ( d[j].typeof=='function') {
        
        console.log(d[j](5, 5));
    }
    
}


