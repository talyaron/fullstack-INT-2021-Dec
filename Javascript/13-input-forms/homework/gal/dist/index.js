function handleUrl(event) {
    var value = event.target.value;
    var outPut = document.querySelector(".img");
    outPut.innerHTML = "<img src=\"" + value + "\">";
}
