function percentAge(age, manOrWoman) {
    var averageMan = 81;
    var averageWoman = 84.5;
    if (manOrWoman == 'man') {
        return "your age in percent is " + age / averageMan * 100;
    }
    else if (manOrWoman == 'woman') {
        return "your age in percent is " + age / averageWoman * 100;
    }
}
var y = percentAge(24, 'woman');
console.log(y);
