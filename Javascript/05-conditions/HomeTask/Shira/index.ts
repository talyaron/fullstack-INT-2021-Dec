
var tax:number = 0;
var salary:number=5000;

 var level1Max:number = 6450;
 var level1Per:number = 0.1;

 var level2Min:number = 6451;
 var level2Max:number = 9240;
 var level2dif:number = level2Max-level2Min;
 var level2Per:number = 0.14;

  
 var level3Min:number = 9241;
 var level3Max:number = 14840; 
 var level3dif:number = level3Max-level3Min;
 var level3Per:number = 0.2;


 var level4Min:number = 14841;
 var level4Max:number = 20620; 
 var level4dif:number = level4Max-level4Min;
 var level4Per:number = 0.31;

 var level5Min:number = 20621;
 var level5Max:number = 42910; 
 var level5dif:number = level5Max-level5Min;
 var level5Per:number = 0.35; 

 var level6Min:number = 42911;
 var level6Max:number = 55270; 
 var level6dif:number = level6Max-level6Min;
 var level6Per:number = 0.47; 

 var level7Per:number = 0.5; 


 if (salary<=level1Max){
    tax=tax+(salary*level1Per) 
} else if (salary<=level2Max) {
    tax=tax+(level1Max*level1Per + (salary-level1Max)*level2Per)
} else if (salary<=level3Max){
    tax=tax+(level1Max*level1Per + (level2dif)*level2Per + (salary-level2Max)*level3Per)
} else if (salary<=level4Max){
    tax=tax+(level1Max*level1Per + (level2dif)*level2Per + (level3dif)*level3Per + (salary-lvl3max)*level4Per)
} else if (salary<=level5Max){
    tax=tax+(level1Max*level1Per + (level2dif)*level2Per + (level3dif)*level3Per + (level4dif)*level4dif + (salary-level4Max)*level5Per)
} else if (salary<=level6Max){
    tax=tax+(level1Max*level1Per + (level2dif)*level2Per + (level3dif)*level3Per + (level4dif)*level4Per + (level5dif)*level5Per + (salary-level5Max)*level6Per)
} else {
    tax=tax+(level1Max*level1Per + (level2dif)*level2Per + (level3dif)*level3Per + (level4dif)*level4Per + (level5dif)*level5Per + (level6dif)*level6Per + (salary-level6Max)*level7Per)
}

console.log(Math.floor(tax))
