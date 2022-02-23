var BloodDiamond = {
    name: "Blood Diamond",
    director: "Edward Zwick",
    ReleasedDate: "2008"
};
var GoodFellas = {
    name: "Goodfellas",
    director: "Martin Scorsese",
    ReleasedDate: "1990"
};
var Shawshank = {
    name: "shawshank redemption",
    director: "Frank Darabont",
    ReleasedDate: "1994"
};
function Movie(pesonObj) {
    return "Hello everybody, our movie today is " + pesonObj.name + " was directed by " + pesonObj.director + " and released in year " + pesonObj.ReleasedDate + " ";
}
var movieBD = Movie(BloodDiamond);
console.log(movieBD);
var movieGF = Movie(GoodFellas);
console.log(movieGF);
var movieSH = Movie(Shawshank);
console.log(movieSH);
