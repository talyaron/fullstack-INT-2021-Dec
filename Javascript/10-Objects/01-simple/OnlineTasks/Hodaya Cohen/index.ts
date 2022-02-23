const movie1 = {
    name: "We'm the tinder",
    stageName: "Plisiti Moris",
    releaseDate: "2/2/2022",
};
const movie2 = {
    name: "WW84",
    stageName: "Pati Jankings",
    releaseDate: "27/5/2021",
};
const movie3 = {
    name: "Home Team",
    stageName: "Daniel Kinana",
    releaseDate: "28/1/2022",
};
function theater(pesonObj){
    return ` The movie ${pesonObj.name}Name of the director ${pesonObj.stagName} You made a premiere ${pesonObj.releaseDate}`
}
const movie1 = theater(movie1);
console.log((movie1)
const movie2 = theater(movie2);
console.log(movie2)
const movie3 = theater(movie3);
console.log(movie3)