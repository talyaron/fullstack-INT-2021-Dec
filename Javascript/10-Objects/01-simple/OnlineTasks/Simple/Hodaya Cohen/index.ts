const movieTinder = {
    name: "We'm the tinder",
    stageName: "Plisiti Moris",
    releaseDate: "2/2/2022",
};
const movieWW84 = {
    name: "WW84",
    stageName: "Pati Jankings",
    releaseDate: "27/5/2021",
};
const movieHomeTeam = {
    name: "Home Team",
    stageName: "Daniel Kinana",
    releaseDate: "28/1/2022",
};
function theater(movies){
    return ` The movie ${movies.name}Name of the director ${movies.stagName} You made a premiere ${movies.releaseDate}`
}
const movie1 = theater(movieTinder);
console.log((movie1)
const movie2 = theater(movieWW84);
console.log(movie2)
const movie3 = theater(movieHomeTeam);
console.log(movie3)