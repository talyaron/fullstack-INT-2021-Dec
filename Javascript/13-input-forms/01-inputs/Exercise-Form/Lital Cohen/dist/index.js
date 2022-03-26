function handleGetText(event) {
    console.dir(event);
    var outputOfTExt = document.querySelector("#" + event.target.name);
    try {
        var value = event.target.value;
        outputOfTExt.innerHTML = value;
        console.log(value);
    }
    catch (error) {
        console.log(error);
    }
}
