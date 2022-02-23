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

console.log(Movies(thelionking)) ;

console.log(Movies(sing)) ;

console.log(Movies(tomandgeri)) ;
