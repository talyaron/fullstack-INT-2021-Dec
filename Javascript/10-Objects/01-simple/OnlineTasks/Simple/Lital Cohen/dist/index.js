var inventingAnna = {
    title: "Inventing Anna",
    directorName: "David Frankel",
    yearOfPublication: "2022"
};
var paperHouse = {
    title: "Paper House",
    directorName: "Ron Silver",
    yearOfPublication: "1998"
};
var run = {
    title: "Run",
    directorName: "Tate Miller",
    yearOfPublication: "2018"
};
function netflixInfo(seriesObj) {
    return "The information I found about: " + seriesObj.title + " the director is: " + seriesObj.directorName + ". year of pulication: " + seriesObj.yearOfPublication;
}
var info = netflixInfo(inventingAnna);
console.log(info);
var info2 = netflixInfo(paperHouse);
console.log(info2);
var info3 = netflixInfo(run);
console.log(info3);
