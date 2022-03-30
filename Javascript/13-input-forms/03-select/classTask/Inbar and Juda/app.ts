function chooseCountry(ev) {
    console.log(ev)



}


const countries: Array<string> = ['Russia', 'Israel', 'Portugal', 'France', 'USA'];

const flags: Array<string> = ['https://cdn.britannica.com/42/3842-004-F47B77BC/Flag-Russia.jpg',
    'https://cdn.britannica.com/53/1753-004-03582EDA/Flag-Israel.jpg', 'https://cdn.britannica.com/88/3588-004-E0E45339/Flag-Portugal.jpg', 'https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg', ' https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg']


function renderCountries(option: string) {
    return `<option value=${option}>${option}</option>`
}

function renderSelect(options: Array<string>, functionName: string, element: Element) {
    try {
        let html = `<select onchange="${functionName}(event)"> 
        <option value="" disabled selected>Choose</option>`;
        options.forEach(el => {
            html += renderCountries(el)
        });
        html += `</select>`
        element.innerHTML = html;

    } catch (error) {
        console.log(error)
    }
}

const root = document.querySelector('#root');
renderSelect(countries, 'chooseCountry', root);