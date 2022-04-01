var footbalePlayrs = ["ronaldo", "messi", "riveri"];
var basketblePlayrs = ["gorden", "caspi", "lebron"];
var tennisPlayrs = ["federer", "nadal", "shachar"];
function handleGetPlayrs(event) {
    var div = document.querySelector(".playrs");
    var typeOfSport = event.target.value;
    var html = "<select name = \"plares\" onchange=\"handleDisplay(event)\">";
    html += "<option value=\"\" disabled selected>choose a player</option>";
    switch (typeOfSport) {
        case "basketball":
            basketblePlayrs.forEach(function (elm) {
                html += "<option value=\"" + elm + "\">" + elm + "</option>";
            });
            break;
        case "football":
            footbalePlayrs.forEach(function (elm) {
                html += "<option value=\"" + elm + "\">" + elm + "</option>";
            });
            break;
        case "tennis":
            tennisPlayrs.forEach(function (elm) {
                html += "<option value=\"" + elm + "\">" + elm + "</option>";
            });
            break;
        default:
            console.log('default');
    }
    html += "</select>";
    console.log(html);
    div.innerHTML = html;
}
