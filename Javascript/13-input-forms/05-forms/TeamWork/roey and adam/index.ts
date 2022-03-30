

function handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev.target.elements)
    let info = ev.target.elements
    const userObj = {}
    for (let i = 0; i < info.length; i++) {
        if (info[i].type != 'submit') {
            userObj[info[i].name] = info[i].value
        }
    }
    if (userObj['password'] == userObj['confirmPassword']) {
        console.log(userObj)
    }else alert(`you entered the wrong password!`)

}


function pass(ev){
    let firstPass = ev.target.value
    return firstPass
}


function checkPass(ev){
    let secondPass = ev.target.value
    if(pass != secondPass){
        alert('hi')
    }
}