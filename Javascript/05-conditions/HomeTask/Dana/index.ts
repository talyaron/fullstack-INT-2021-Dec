

//salary times 0.9 for basic tax calculations
var basictax: number = lvl1max * 0.9

var maxtaxLevel2 :number = ((lvl2max-lvl2min) * 0.86)
var maxtaxLevel3 :number = ((lvl3max-lvl3min) * 0.8)
var maxtaxLevel4 :number = ((lvl4max-lvl4min) * 0.69)
var maxtaxLevel5 :number = ((lvl5max-lvl5min) * 0.65)
var maxtaxLevel6 :number = ((lvl6max-lvl6min) * 0.53)
var maxtaxlevel7 :number = ((lvl7min-lvl6max) * 0.5)


//level 1 tax range
var lvl1min: number = 1
var lvl1max: number = 6450
//level 2 tax range
var lvl2min: number = 6451
var lvl2max: number = 9240
//level 3 tax range
var lvl3min: number = 9241
var lvl3max: number = 14840
//level 4 tax range
var lvl4min: number = 14841
var lvl4max: number = 20620
//level 5 tax range
var lvl5min: number = 20621
var lvl5max: number = 42910
//level 6 tax range
var lvl6min: number = 42911
var lvl6max: number = 55270
//level 7 tax range
var lvl7min: number = 55270

//difference between Lvl1 & Lvl2 income
var lvl2MaxTax: number = basictax + (lvl2max-lvl1max)* 0.86

var salary: number = 10000



if (salary <= lvl1max) {console.log(salary * 0.9)
  }

if (salary >= lvl2min && salary <= lvl2max) {console.log(basictax + ((salary-lvl1max) * 0.86))
}

if (salary >= lvl3min && salary <= lvl3max) {console.log(maxtaxLevel2 + (salary-lvl2max)* 0.8)
}

if (salary >= lvl4min && salary <= lvl4max) {console.log(maxtaxLevel3 + (salary-lvl3max)* 0.69)
}

if (salary >= lvl5min && salary <= lvl5max) {console.log(maxtaxLevel4 + (salary-lvl4max)* 0.65)
}

if (salary >= lvl6min && salary <= lvl6max) {console.log(maxtaxLevel5 + (salary-lvl5max)* 0.53)
}

if (salary >= lvl7min) {console.log(maxtaxLevel6 + (salary-lvl6max)* 0.5)
}

console.log(salary)
