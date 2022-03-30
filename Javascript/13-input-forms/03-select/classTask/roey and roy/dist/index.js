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
var messiArray = Object.values(messi);
var roey = {
    cName: 'r',
    fName: 's',
    lNmae: 'Messi',
    team: 'PSG',
    age: 34
};
var roeyArray = Object.values(roey);
var kobe = {
    fName: 'Kobe',
    lName: 'Brian'
};
var StephenCurry = {
    fName: 'Stephen',
    lName: 'Curry'
};
var footballPlayers = [ronaldo, messi, roey];
var newSelector = document.createElement("select");
var newDisabledOption = document.createElement("option");
function createSelector(selectorName) {
    body.append(newSelector);
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
            for (var i = 0; i < selectorName.length; i++) {
                if (selectorName[i].cName == result) {
                    var newPlayerDiv = document.createElement("div");
                    newPlayerDiv.className = 'newPlayerDiv';
                    body.append(newPlayerDiv);
                    var newPlayerUl = document.createElement("ul");
                    newPlayerDiv.append(newPlayerUl);
                    var selectedSelector = selectorName[i];
                    for (var property in selectedSelector) {
                        console.log(selectedSelector[property]);
                        var newPlayerLi = document.createElement("li");
                        newPlayerLi.innerHTML = selectedSelector[property];
                        newPlayerUl.append(newPlayerLi);
                    }
                }
            }
            //console.dir(ev.target)
        };
    });
}
function handleSport(ev) {
    var sport = ev.target.value;
    if (sport == 'football') {
        createSelector(footballPlayers);
        console.dir(ev.target);
        //console.log('a')
    }
    else if (sport == 'basketball') {
        createSelector();
    }
}
