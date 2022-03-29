
function handleSelectCountry(ev: any){
    ev.preventDefault()
    console.log(ev.target.value)

    root.innerHTML = `
            <div>${ev.target.value}</div>
            
        `
}
const countries:NodeList = document.querySelectorAll('.option')
// const findFlag = countriesFlags.find(countries)

const root:HTMLDivElement= document.querySelector('#root')
const countriesFlags:Array<any> = [
    {
        name:"Israel", 
        src: "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png"
    },
    {
        name:"Greece", 
        src: "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png"
    },
    {
        name:"U.S.A", 
        src: "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png"
    }
]




// function findCountry (){
//     for (let i=0, i<countriesFlags.length, i++)
// }




function countryOptions(option:string){
    return `<option value=${option}>${option}</option>`
}

function handleUrl(options:Array<string>, functionName:URL, element:Element){
    try {
        let html = `<select onchange="${functionName}(event)"> 
        <option value="" disabled selected>Choose</option></select>`;
        options.forEach(el => {
            html += countryOptions(el)
        });
        element.innerHTML = html;

        // root.innerHTML = `
        //     <div>${}</div>
        //     <img src="${}" alt=""/>
        // `
    } catch (error) {
        console.log(error)
    }
}