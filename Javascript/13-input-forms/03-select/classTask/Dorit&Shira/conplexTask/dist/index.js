var body = document.querySelector('body');
var userimg = document.querySelector('.user_img');
var basketballArray = ["KareenAbdulJabbar", "KevinDurant", "KobeBrayant", "MaginJonson", "MichalJordan", "StephenCurry"];
var footballArray = ["CristianoRonaldo", "DiegoMaradona", "LionelMessi", "Pele", "AinedineZidan"];
var tennisArray = ["MariaSharapova", "NovacDjukovic", "RafaelNadal", "RogerFederer", "Williams"];
// function checkurl(event) {
//     const url:URL = event.target.value;
//     userimg.src = `${url}`;
// }
// function checkfile() {
//     const fileInput = document.getElementById('fileup');
//     const selectedFile = fileInput.files[0];
//     var path = (window.URL || window.webkitURL).createObjectURL(selectedFile);
//     console.log('path', path);
//     if (selectedFile.type === "image/jpeg") {
//         console.log(`jpg`)
//         userimg.src = `${path}`
//     }
//     else {
//         alert(`Only upload jpg files please!`)
//     }
// }
function handleSelectsports(event) {
    var sportType = event.target.value;
    var root = document.querySelector("#root");
    root.innerHTML = "<select name=\"" + sportType + "\" id=\"\" disabled selected onchange=\"handleDisplay(event)\">";
    var texti = "choose a " + sportType + " player to display";
    root.innerHTML += "<option value = \"\" disabled selected>" + texti + "</option>";
    switch (sportType) {
        case "basketball":
            basketballArray.forEach(function (Element) {
                root.innerHTML += "<option value=\"" + Element + "\">" + Element + "</option>";
            });
            break;
        case "football":
            footballArray.forEach(function (Element) {
                root.innerHTML += "<option value=\"" + Element + "\">" + Element + "</option>";
            });
            break;
        case "tennis":
            tennisArray.forEach(function (Element) {
                root.innerHTML += "<option value=\"" + Element + "\">" + Element + "</option>";
            });
            break;
        default:
            console.log('defualt');
    }
    root.innerHTML += "</select>";
}
function handleDisplay(event) {
    var player = event.target.value;
    console.log(player);
}
//     switch (sportType) {
//         case "basketball":
//             handleBaskeball()
//             break;
//         case "football":
//             handleFootball()
//             break;
//         case "tennis":
//             handleTennis()
//             break;
//         default:
//             console.log('defualt')
//     } 
// }
// function handleBaskeball(){
//     let root:HTMLElement = document.querySelector("#root")
//     root.innerHTML+=`<select name="basketball" id="" multiple onchange="handleDisplayBB(event)">`
//     root.innerHTML+=`<option value = "" disabled selected>Choose a player to display</option>`
//     basketballArray.forEach((Element)=>{
//     root.innerHTML+=`<option value="${Element}">${Element}</option>`  
//     })
//     root.innerHTML+=`</select>`
// }
// function handleFootball(){
//     let root:HTMLElement = document.querySelector("#root")
//     root.innerHTML+=`<select name="football" id="" multiple onchange="handleDisplayFB(event)">`
//     root.innerHTML+=`<option value = "" disabled selected>Choose a player to display</option>`
//     basketballArray.forEach((Element)=>{
//     root.innerHTML+=`<option value="${Element}">${Element}</option>`   
// })
// root.innerHTML+=`</select>`
// }
// function handleTennis(){
//     let root:HTMLElement = document.querySelector("#root")
//     root.innerHTML+=`<select name="tennis" id="" multiple onchange="handleDisplayTn(event)">`
//     root.innerHTML+=`<option value = "" disabled selected>Choose a player to display</option>`
//     basketballArray.forEach((Element)=>{
//     root.innerHTML+=`<option value="${Element}">${Element}</option>`   
// })
// root.innerHTML+=`</select>`
// }    
// <select name="sports" id="" multiple onchange="handleSelectsports(eve)">
//             <option value="" disabled selected>Choose sports type</option>
//             <option value="football">Football</option>
//             <option value="basketball">Basketball</option>
//             <option value="tennis">Tennis</option>
//         </select>
