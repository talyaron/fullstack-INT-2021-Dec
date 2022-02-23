var thematrix = {
    //key:value, (//property)
    name: "lena and lily",
    lastName: "Wachowskis",
    bornState: "Chicago,Illinois"
};
function movie(thematrix) {
    return "this movie was created by " + thematrix.name + " " + thematrix.lastName + ". was born in " + thematrix.bornState;
}
console.log(thematrix);
