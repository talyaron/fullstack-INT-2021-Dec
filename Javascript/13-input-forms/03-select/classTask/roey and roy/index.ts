

let sports = document.querySelector("#sports")

let body = document.querySelector("body")

interface football {
    cName: string,
    fName: string,
    lNmae: string,
    team: string,
    age: number
}

const ronaldo: football = {
    cName: 'ronaldo',
    fName: 'Cristiano',
    lNmae: 'Ronaldo',
    team: 'Man united',
    age: 37
}

const messi: football = {
    cName: 'messi',
    fName: 'Leo',
    lNmae: 'Messi',
    team: 'PSG',
    age: 34
}

const roey: football = {
    cName: 'r',
    fName: 's',
    lNmae: 'Messi',
    team: 'PSG',
    age: 34
}

const kobe = {
    fName: 'Kobe',
    lName: 'Brian'
}

const StephenCurry = {
    fName: 'Stephen',
    lName: 'Curry'
}

const footballPlayers: Array<football> = [ronaldo, messi, roey]

function createSelector(selectorName) {
    let newSelector = document.createElement("select")
    body.append(newSelector)
    const newDisabledOption = document.createElement("option")
    newDisabledOption.setAttribute('selected', 'selected')
    newDisabledOption.disabled = true
    newDisabledOption.innerHTML = 'Choose a Player'
    newSelector.append(newDisabledOption)
    selectorName.forEach(element => {
        const newOption = document.createElement("option")
        newSelector.append(newOption)
        newOption.innerHTML = element.cName
        newSelector.onchange = function handlePlayer(ev) {
            let result = ev.target.value
            if (result == result) {
                console.log(ev.target.value)
                let newPlayerDiv = document.createElement("div")
                newPlayerDiv.className = 'newPlayerDiv'
                body.append(newPlayerDiv)
                let newPlayerUl = document.createElement("ul")
                newPlayerDiv.append(newPlayerUl)
                selectorName.forEach(property => {
                    let newPlayerLi = document.createElement("li")
                    newPlayerLi.innerHTML += 'asfpiafsjapisfjpiasjf'
                    newPlayerUl.append(newPlayerLi)
                });
            }
            console.dir(ev.target)
        }
    });
}

function handleSport(ev) {
    let sport = ev.target.value;
    if (sport == 'football') {
        createSelector(footballPlayers)
        console.log('a')
    } else if (sport == 'basketball') {
        createSelector()
    }
}
