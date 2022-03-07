let box:any = document.querySelector('.box');
const graf:Array<number> = [50,20,30]
 let schema ;
 let box1;
 

   
    
    // let dup:
function duplicate(box, graf){
   
    graf.forEach(elm=>{
        schema =elm * 10;
        // console.log(schema)
        box.style.height = schema + 'px';
        var dup = box + box * elm.innerHTML
    })
    return `${dup}`
    // let dup = box * graf.length
    // return dup
}
box.style.width = duplicate()