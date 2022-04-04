
 
const footbalePlayrs:Array<string>=["ronaldo", "messi","riveri"]
const basketblePlayrs:Array<string>=["gorden", "caspi","lebron"]
const tennisPlayrs:Array<string>=["federer", "nadal", "shachar"]


function handleGetPlayrs(event){
    const div = document.querySelector(".playrs")
    const typeOfSport =event.target.value
    let html = `<select name = "plares" onchange="handleDisplay(event)">`
    html += `<option value="" disabled selected>choose a player</option>`
    switch(typeOfSport){
        case "basketball":
        basketblePlayrs.forEach(elm =>{
            html += `<option value="${elm}">${elm}</option>`
        })
        break;
        case "football":
            footbalePlayrs.forEach(elm =>{
                html += `<option value="${elm}">${elm}</option>`
            })
        break;
        case "tennis":
            tennisPlayrs.forEach(elm =>{
                    html += `<option value="${elm}">${elm}</option>`
                })
        break;
                default:
                    console.log('default')
    }
    html += `</select>`
    console.log(html)
    div.innerHTML = html
    
}