var body = document.querySelector('body');
var userimg = document.querySelector('.user_img');
var basketballArray = ["KareenAbdulJabbar", "KevinDurant", "KobeBrayant", "MaginJonson", "MichalJordan", "StephenCurry"];
var footballArray = ["CristianoRonaldo", "DiegoMaradona", "LionelMessi", "Pele", "ZinedineZidan"];
var tennisArray = ["MariaSharapova", "NovakDjokovic", "RafaelNadal", "RogerFederer", "VenusWilliams"];
function handleSelectsports(event) {
    var sportType = event.target.value;
    var root = document.querySelector("#root");
    var html = "<select name=\"" + sportType + "\" id=\"\" onchange=\"handleDisplay(event)\">";
    var texti = "choose a " + sportType + " player";
    html += "<option value=\"\" disabled selected>" + texti + "</option>";
    switch (sportType) {
        case "basketball":
            basketballArray.forEach(function (Element) {
                html += "<option value=\"" + Element + "\">" + Element + "</option>";
            });
            break;
        case "football":
            footballArray.forEach(function (Element) {
                html += "<option value=\"" + Element + "\">" + Element + "</option>";
            });
            break;
        case "tennis":
            tennisArray.forEach(function (Element) {
                html += "<option value=\"" + Element + "\">" + Element + "</option>";
            });
            break;
        default:
            console.log('defualt');
    }
    html += "</select>";
    console.log(html);
    root.innerHTML = html;
}
function handleDisplay(event) {
    var player = event.target.value;
    console.log("player:" + player);
    var src = "../images/" + player + ".jpg";
    console.log("value of src:" + src);
    var outPut = document.querySelector(".img");
    outPut.innerHTML = "<img src=\"" + src + "\" width=\"120px\" height=\"120px\">";
}
