
function handaleSand(ev){
    console.log(ev)
    ev.preventDefault();
    const elm = ev.target.elements
    let result = {}
    for (let i = 0; i<elm.length; i++){
        if (elm[i].name && elm[i].value){
            result[elm[i].name] = elm[i].value
        }
    }
    console.log(result)

}