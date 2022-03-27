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

const kobe = {
    fName: 'Kobe',
    lName: 'Brian'
}

const StephenCurry = {
    fName: 'Stephen',
    lName: 'Curry'
}

const footballPlayers: Array<football> = [ronaldo, messi]

function createSelector(selectorName) {
    let newSelector = document.createElement("select")
    body.append(newSelector)
    selectorName.forEach(element => {
        const newOption = document.createElement("option")
        newSelector.append(newOption)
        newOption.innerHTML = element.cName
        console.dir(element)
    });
}

function handleSport(ev) {
    let sport = ev.target.value;
    if (sport == 'football') {
        createSelector(footballPlayers)
        console.log('a')
    }else if(sport == 'basketball'){
        createSelector()
    }
}

