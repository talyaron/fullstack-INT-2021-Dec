var basictax:number = 0;
    
var lvl1max:number = 6450; 
var lvl1per:number = 0.1; 
    
var lvl2min:number = 6451; 
var lvl2max:number = 9240; 
var lvl2dif:number = lvl2max-lvl2min;
var lvl2per:number = 0.14;
    
var lvl3min:number = 9241;
var lvl3max:number = 14840; 
var lvl3dif:number = lvl3max-lvl3min;
var lvl3per:number = 0.2; 
    
var lvl4min:number = 14841; 
var lvl4max:number = 20620; 
var lvl4dif:number = lvl4max-lvl4min;
var lvl4per:number = 0.31; 
    
var lvl5min:number = 20621; 
var lvl5max:number = 42910; 
var lvl5dif:number = lvl5max-lvl5min;
var lvl5per:number = 0.35; 
    
var lvl6min:number = 42911; 
var lvl6max:number = 55270; 
var lvl6dif:number = lvl6max-lvl6min;
var lvl6per:number = 0.47; 
 
var lvl17:number = 55270;
var lvl7per:number = 0.5;

var salary:number = undefined;


if (salary = lvl1max) {
    console.log(6450*lvl1per)
}    
if (salary >= 6451 && salary <= 9240) {
   console.log(lvl2max*lvl2per + (salary-lvl2max)*lvl2per) 
} 
