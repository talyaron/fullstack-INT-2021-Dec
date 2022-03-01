const inventingAnna ={
    title: "Inventing Anna",
    directorName: "David Frankel",
    yearOfPublication: "2022"
};

const paperHouse ={
    title: "Paper House",
    directorName: "Ron Silver",
    yearOfPublication: "1998"
};

const run ={
    title: "Run",
    directorName: "Tate Miller",
    yearOfPublication: "2018"
};

function netflixInfo(seriesObj){
    return `The information I found about: ${seriesObj.title} the director is: ${seriesObj.directorName}. year of pulication: ${seriesObj.yearOfPublication}`
}

const info = netflixInfo(inventingAnna);
console.log(info)

const info2 = netflixInfo(paperHouse);
console.log(info2)

const info3 = netflixInfo(run);
console.log(info3)