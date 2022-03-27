let choice:string = ""
function handleSelectFlag(event:any){
    choice = event.target.value

    switch (choice) {
        case "algeria":
            hendleAlgeria()
            break;
        case "ohio":
            hendleOhio()
            break;
        case "swiss":
            hendleSwizerland()
            break;
        case "nepal":
            hendleNepal()
            break;
        default:
            console.log('defualt')
    }
    function hendleAlgeria(){
        const value = "images/Algeria.PNG"
        let outPut = document.querySelector(".img")
        outPut.innerHTML = `<img src="${value}" width="120px" height="120px">`

    }
    function hendleSwizerland(){
        const value = "images/swizerland.PNG"
        let outPut = document.querySelector(".img")
        outPut.innerHTML = `<img src="${value}" width="120px" height="120px">`

    }
    function hendleNepal(){
        const value = "images/nepal.PNG"
        let outPut = document.querySelector(".img")
        outPut.innerHTML = `<img src="${value}" width="120px" height="120px">`

    }
    function hendleOhio(){
        const value = "images/ohio.PNG"
        let outPut = document.querySelector(".img")
        outPut.innerHTML = `<img src="${value}" width="120px" height="120px">`

    }
}
