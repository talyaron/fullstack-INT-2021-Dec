const Populationsample:Array<any>= [468.809, 252.164, 213.118, 196.691, 169.696, 125.753, 61.244, 41.801, 28.261]
console.dir(Populationsample)


Populationsample.forEach(Element=>{
    let addObj= document.createElement("bars__bar")
    addObj.classList.add("bars__bar")
    addObj.style.height= (Element*2)+"px"
    let text =document.createTextNode (`${Element}`)
    addObj.appendChild(text)
    let bars= document.getElementById("bars")
    bars.appendChild(addObj)
});



// Population Sample Key:
// Tlv: 468,809
// Petah bli tiqva: 252,164
// Bnei-brek: 213,118
// Holon: 196,691
// Ramat-gan: 169,696
// Bat yam: 125,753
// Givatiym: 61,244
// Qiryat-ono: 41,801
// Givat-shmuel: 28,261

