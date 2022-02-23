var thematrix = {
    nameOfmovie: "the matrix",
    name: "lena and lily Wachowskis",
    bornState: "Chicago,Illinois"
};
var RubenBrandtCollector = {
    nameOfmovie: "ruben brandt, collector",
    name: "Milorad Krstić",
    bornState: "Hungarian"
};
var mrNobdy = {
    nameOfmovie: "Mr. Nobody",
    name: "Jaco Van Dormael",
    bornState: "Belgium"
};
function movie(thematrix) {
    return "this movie was created by " + thematrix.nameOfmovie + " " + thematrix.lastName + ". was born in " + thematrix.bornState;
}
console.log(movie(thematrix));
console.log(movie(mrNobody));
