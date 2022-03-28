var sports = document.querySelector("#sports");
var body = document.querySelector("body");
var ronaldo = {
    cName: 'ronaldo',
    fName: 'Cristiano',
    lNmae: 'Ronaldo',
    team: 'Man united',
    age: 37
};
var messi = {
    cName: 'messi',
    fName: 'Leo',
    lNmae: 'Messi',
    team: 'PSG',
    age: 34
};
var kobe = {
    fName: 'Kobe',
    lName: 'Brian'
};
var StephenCurry = {
    fName: 'Stephen',
    lName: 'Curry'
};
var footballPlayers = [ronaldo, messi];
function createSelector(selectorName) {
    var newSelector = document.createElement("select");
    body.append(newSelector);
    selectorName.forEach(function (element) {
        var newOption = document.createElement("option");
        newSelector.append(newOption);
        newOption.innerHTML = element.cName;
        console.dir(element);
    });
}
function handleSport(ev) {
    var sport = ev.target.value;
    if (sport == 'football') {
        createSelector(footballPlayers);
        console.log('a');
    }
    else if (sport == 'basketball') {
        createSelector();
    }
}
