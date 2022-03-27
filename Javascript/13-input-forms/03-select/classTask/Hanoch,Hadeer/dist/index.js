function HandleGetFlag(ev) {
    console.log(ev.target.value);
    var value = ev.target.value;
    var imgflag = document.querySelector('#imgflag');
    if (value == "turkey") {
        imgflag.innerHTML = "<img src=\"./dist/turkeyflag.jpg\" alt=\"\"> <br> " + value;
    }
    else if (value == "ukraineflag") {
        imgflag.innerHTML = "<img src=\"./dist/ukrianeflag.jpg\" alt=\"\">";
    }
}
