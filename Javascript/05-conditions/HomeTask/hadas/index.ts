var tax: number = 0;
var salary: number = 15000;

var stage1max: number = 6450;  //max salary
var stage1tax: number= 0.1;  //10%

var stage2min: number= 6451;
var stage2max: number= 9240;  //max salary
var stage2dif: number= stage2max-stage2min;
var stage2tax: number= 0.14;  //14%

var stage3min: number= 9241;
var stage3max: number= 14840;   //max salary
var stage3dif: number= stage3max-stage3min;
var stage3tax: number= 0.20;   //20%

var stage4min: number= 14841;
var stage4max: number= 20620;   //max salary
var stage4dif: number= stage4max-stage4min;
var stage4tax: number= 0.31;   //31%

var stage5min: number= 20621;
var stage5max: number= 42910;  //max salary
var stage5dif: number= stage5max-stage5min;
var stage5tax: number= 0.35;   //35%

var stage6min: number= 42911;
var stage6max: number= 55270;  //max salary
var stage6dif: number= stage6max-stage6min;
var stage6tax: number= 0.47;   //47%


var stage7tax: number= 0.50;   //50%

if (salary<=stage1max){
    tax=tax+(salary*stage1tax)
}else if(salary<=stage2max){
    tax=tax+(stage1max*stage1tax+(salary-stage1max)*stage2tax)
}else if(salary<=stage3max){
    tax=tax+(stage1max*stage1tax+ ( stage2dif)* (stage2tax)+(salary-stage2max)*stage3tax)
}else if(salary<=stage4max){
    tax=tax+(stage1max*stage1tax+ ( stage2dif)* (stage2tax)+(stage3dif)*(stage3tax)+(salary-stage3max)*stage4tax)
}else if(salary<=stage5max){
    tax=tax+(stage1max*stage1tax+ ( stage2dif)* (stage2tax)+(stage3dif)*(stage3tax)+(stage4dif)*(stage4tax)+(salary-stage4max)*stage5tax)
}else if(salary<=stage6max){
    tax=tax+(stage1max*stage1tax+ ( stage2dif)* (stage2tax)+(stage3dif)*(stage3tax)+(stage4dif)*(stage4tax)+(stage5dif)*(stage5tax)+(salary-stage5max)*stage6tax)
}else{
    tax=tax+(stage1max*stage1tax+ ( stage2dif)* (stage2tax)+(stage3dif)*(stage3tax)+(stage4dif)*(stage4tax)+(stage5dif)*(stage5tax)+(stage6dif)*(stage6tax)+(salary-stage6max)*stage7tax)
}
console.log(Math.floor(tax))