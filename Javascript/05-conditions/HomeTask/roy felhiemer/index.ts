var salary: number=30000;
var a: number= salary*.9;
var b: number= 5805+ .86*(salary-6450); 
var c: number= 8204.4+ .8*(salary-9240);
var d: number= 12684.4+ .69*(salary-14840);
var e: number= 16672.6+ .65*(salary-20620);
var f: number= 31161.1+ .53*(salary-42910);
var g: number= 37711.9+ .5*(salary-55270);

if(salary<=6450){
    console.log(a)
}
if(salary>=6451 && salary<=9240){
    console.log(b)
};
if(salary>=9241 && salary<=14840){
    console.log(c)
};
if(salary>=14841 && salary<=20620){
    console.log(d)
};
if(salary>=20621 && salary<=42910){
    console.log(e)
};
if(salary>=42911 && salary<=55270){
    console.log(f)
};
if(salary>=55271){
    console.log(g)
};