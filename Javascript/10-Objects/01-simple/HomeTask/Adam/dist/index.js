var friends = [{
        Name: "Adam",
        lastName: "Epelbaum",
        age: 22,
        job: "barista",
        address: "Zoran"
    },
    {
        Name: "Ori",
        lastName: "Neuman",
        age: 22,
        job: "Cooking",
        address: "Zoran"
    },
    {
        Name: "Shai",
        lastName: "Zilbershatz",
        age: 23,
        job: "Sales",
        address: "Nizaney Oz"
    },
    {
        Name: "Ben",
        lastName: "Balas",
        age: 29,
        job: "Software",
        address: "Tel Mond"
    },
];
function Con(arr) {
    var Add = '';
    arr.forEach(function (elm) { return Add += elm.address + " "; });
    return ("you have " + arr.length + " friends and they live in " + Add);
}
console.log(Con(friends));
