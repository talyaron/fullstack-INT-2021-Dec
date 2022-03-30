

function handleForm(ev) {
    ev.preventDefault();
    console.log(ev.target.elements)
    let elements = ev.target.elements
    let info = {}
    for (let i = 0; i < elements.length; i++) {
        if (elements.type !== 'button') {
            info[elements[i].name] = elements[i].value;
        }
    }
    console.log(info)
}