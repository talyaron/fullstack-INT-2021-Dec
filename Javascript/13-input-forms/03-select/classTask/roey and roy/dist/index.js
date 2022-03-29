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
    var newDisabledOption = document.createElement("option");
    newDisabledOption.setAttribute('selected', 'selected');
    newDisabledOption.disabled = true;
    newDisabledOption.innerHTML = 'Choose a Player';
    newSelector.append(newDisabledOption);
    selectorName.forEach(function (element) {
        var newOption = document.createElement("option");
        newSelector.append(newOption);
        newOption.innerHTML = element.cName;
        newSelector.onchange = function handlePlayer(ev) {
            var result = ev.target.value;
            if (result == element.cName) {
                console.log(ev.target.value);
                var newPlayerDiv = document.createElement("div");
                newPlayerDiv.innerHTML = 'apifsoifedjn';
                body.append(newPlayerDiv);
            }
            console.dir(ev.target);
        };
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
