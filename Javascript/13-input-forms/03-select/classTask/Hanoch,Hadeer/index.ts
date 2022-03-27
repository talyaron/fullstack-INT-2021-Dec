function HandleGetFlag(ev:any){  
    console.log(ev.target.value)
    const value= ev.target.value;
    const imgflag = document.querySelector('#imgflag');

    if (value == "turkey"){

        imgflag.innerHTML = `<img src="./dist/turkeyflag.jpg" alt=""> <br> ${value}`
        }
    else if (value == "ukraineflag"){
        imgflag.innerHTML = `<img src="./dist/ukrianeflag.jpg" alt="">`
    }

}
