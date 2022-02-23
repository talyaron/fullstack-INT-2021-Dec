var thelionking = {
    name: "The lion king",
    inmay: "rov minkof",
    year: "1994"
};
var sing = {
    name: "sing",
    inmay: "jarat gninges",
    year: "2016"
};
var tomandgeri = {
    name: "Tom & geri",
    inmay: " tim stori",
    year: "2021"
};
function Movies(moviesobj) {
    return moviesobj.name + " Directed by " + moviesobj.inmay + " in the year " + moviesobj.year;
}
var movie = Movies(thelionking);
console.log(movie);
var movie2 = Movies(sing);
console.log(movie2);
var movie3 = Movies(tomandgeri);
console.log(movie3);
