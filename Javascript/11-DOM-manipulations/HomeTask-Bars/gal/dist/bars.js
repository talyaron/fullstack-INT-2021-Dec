var Populationsample = [
    468.809, 252.164, 213.118, 196.691, 169.696, 125.753, 61.244, 41.801,
];
console.dir(Populationsample);
function createBars(data) {
    var max = Math.max.apply(Math, data);
    console.log(max);
    data.forEach(function (Element) {
        //create an object (bar)
        var addObj = document.createElement("bars__bar");
        addObj.classList.add("bars__bar");
        addObj.style.height = (Element / max) * 100 + "%";
        var text = document.createTextNode("" + Element);
        addObj.appendChild(text);
        var bars = document.getElementById("bars");
        bars.appendChild(addObj);
    });
}
createBars(Populationsample);
// Population Sample Key:
// Tlv: 468,809
// Petah bli tiqva: 252,164
// Bnei-brek: 213,118
// Holon: 196,691
// Ramat-gan: 169,696
// Bat yam: 125,753
// Givatiym: 61,244
// Qiryat-ono: 41,801
