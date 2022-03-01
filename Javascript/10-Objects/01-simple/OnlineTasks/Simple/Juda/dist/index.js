var avatar = {
    name: "avatar",
    director: "James Cameron",
    release: 2009
};
function movie(pesonObj) {
    return "The movie " + pesonObj.name + " directed by " + pesonObj.director + " and was release at " + pesonObj.release;
}
console.log(movie(avatar));
