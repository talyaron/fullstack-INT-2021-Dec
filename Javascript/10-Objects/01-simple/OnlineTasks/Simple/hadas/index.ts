const thelionking= {
    name: "The lion king",
    inmay: "rov minkof",
    year: "1994",
}

const sing= {
    name: "sing",
    inmay: "jarat gninges",
    year: "2016",
}

const tomandgeri= {
    name: "Tom & geri",
    inmay: " tim stori",
    year: "2021",
}

function Movies (moviesobj){
    return `${moviesobj.name} Directed by ${moviesobj.inmay} in the year ${moviesobj.year}`
}

const movie = Movies(thelionking);
console.log(movie);
const movie2 = Movies(sing);
console.log(movie2);
const movie3 = Movies(tomandgeri);
console.log(movie3);