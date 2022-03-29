const body: HTMLBodyElement = document.querySelector('body');
const userimg: HTMLImageElement = document.querySelector('.user_img');
const basketballArray:Array<string> =["KareenAbdulJabbar","KevinDurant","KobeBrayant","MaginJonson","MichalJordan","StephenCurry"]
const footballArray:Array<string>=["CristianoRonaldo","DiegoMaradona","LionelMessi","Pele","ZinedineZidan"]
const tennisArray:Array<string>=["MariaSharapova","NovakDjokovic","RafaelNadal","RogerFederer","VenusWilliams"]


function handleSelectsports(event){
    let sportType:string = event.target.value
    let root:HTMLElement = document.querySelector("#root")
    let html:string=`<select name="${sportType}" id="" onchange="handleDisplay(event)">`
    let texti:string = `choose a ${sportType} player`
    html+=`<option value="" disabled selected>${texti}</option>`

    switch (sportType){
        case "basketball":
            basketballArray.forEach((Element)=>{
                html+=`<option value="${Element}">${Element}</option>`  
            })
            break;
        case "football":
            footballArray.forEach((Element)=>{
                html+=`<option value="${Element}">${Element}</option>`  
            })
            break;
        case "tennis":
            tennisArray.forEach((Element)=>{
               html+=`<option value="${Element}">${Element}</option>`  
            })
            break;
        default:
            console.log('defualt')
    }
    html+=`</select>`
    console.log(html)
    root.innerHTML=html
}   

    function handleDisplay(event){
        let player:string = event.target.value
        console.log(`player:${player}`)
        let src:string = `../images/${player}.jpg`
        console.log(`value of src:${src}`)
        let outPut:HTMLElement = document.querySelector(".img")
        outPut.innerHTML = `<img src="${src}" width="120px" height="120px">`
    }
    
