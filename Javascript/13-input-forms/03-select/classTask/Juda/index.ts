function createImg(event:any){
    console.dir(event)

    const urlImg:any = document.querySelector('#urlImg') 
    console.dir(urlImg)
    urlImg.attributes[1].nodeValue = event.target.value
 
}

function showNumbers(event:any) {

    console.dir(event)

    const showNum:any = document.querySelector("#showNumbers")

    console.dir(showNum)
    showNum.innerText = event.target.value
}
