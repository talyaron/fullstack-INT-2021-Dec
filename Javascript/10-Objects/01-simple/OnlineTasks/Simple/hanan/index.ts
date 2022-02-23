const thematrix = {
    //key:value, (//property)
    movieName:"The Matrix",
    name:"lena and lily",
    lastName:"Wachowskis",
    bornState:"Chicago,Illinois",
};

const mrNobody = {
    movieName:"Mr No-body",
    name:"Jaco",
    lastName:"Van Dormael",
    bornState:"Belgium",
}


function movie(movie){
    return `${movie.movieName} was created by ${movie.name} ${movie.lastName}. was born in ${movie.bornState}`
}

console.log(movie(thematrix));
console.log(movie(mrNobody));