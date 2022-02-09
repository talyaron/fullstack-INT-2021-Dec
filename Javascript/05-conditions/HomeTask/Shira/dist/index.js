var tax = 0;
var salary = 5000;
var level1Max = 6450;
var level1Per = 0.1;
var level2Min = 6451;
var level2Max = 9240;
var level2dif = level2Max - level2Min;
var level2Per = 0.14;
var level3Min = 9241;
var level3Max = 14840;
var level3dif = level3Max - level3Min;
var level3Per = 0.2;
var level4Min = 14841;
var level4Max = 20620;
var level4dif = level4Max - level4Min;
var level4Per = 0.31;
var level5Min = 20621;
var level5Max = 42910;
var level5dif = level5Max - level5Min;
var level5Per = 0.35;
var level6Min = 42911;
var level6Max = 55270;
var level6dif = level6Max - level6Min;
var level6Per = 0.47;
var level7Per = 0.5;
if (salary <= level1Max) {
    tax = tax + (salary * level1Per);
}
else if (salary <= level2Max) {
    tax = tax + (level1Max * level1Per + (salary - level1Max) * level2Per);
}
else if (salary <= level3Max) {
    tax = tax + (level1Max * level1Per + (level2dif) * level2Per + (salary - level2Max) * level3Per);
}
else if (salary <= level4Max) {
    tax = tax + (level1Max * level1Per + (level2dif) * level2Per + (level3dif) * level3Per + (salary - lvl3max) * level4Per);
}
else if (salary <= level5Max) {
    tax = tax + (level1Max * level1Per + (level2dif) * level2Per + (level3dif) * level3Per + (level4dif) * level4dif + (salary - level4Max) * level5Per);
}
else if (salary <= level6Max) {
    tax = tax + (level1Max * level1Per + (level2dif) * level2Per + (level3dif) * level3Per + (level4dif) * level4Per + (level5dif) * level5Per + (salary - level5Max) * level6Per);
}
else {
    tax = tax + (level1Max * level1Per + (level2dif) * level2Per + (level3dif) * level3Per + (level4dif) * level4Per + (level5dif) * level5Per + (level6dif) * level6Per + (salary - level6Max) * level7Per);
}
console.log(Math.floor(tax));
