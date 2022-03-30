var flags = ["israel", "syria", "thiland", "wonderland"];
var boot = document.querySelector("#boot");
function FlagOption(somethingStupid) {
    return "<option value=" + somethingStupid + ">" + somethingStupid + "</option>";
}
function FlagSelect(options, someFunction, element) {
    try {
        var html_1 = "<select onchange=\"" + someFunction + "(event)\"> \n        <option value=\"\" disabled selected>Choose your papaya</option>";
        options.forEach(function (el) {
            html_1 += FlagOption(el);
        });
        html_1 += "</select>";
        element.innerHTML = html_1;
    }
    catch (error) {
        console.log(error);
    }
}
function handlepapaya(event) {
    var selection = document.querySelector("#selection");
    var images = document.querySelector("#image-slot");
    selection.innerText = "your papaya is: " + event.target.value;
    if (event.target.value == 'israel')
        return images.innerHTML = '<img  src="papaya-images/papaya1.jpg" alt="">';
    if (event.target.value == 'syria')
        return images.innerHTML = '<img  src="papaya-images/papaya2.jpg" alt="">';
    if (event.target.value == 'thiland')
        return images.innerHTML = '<img  src="papaya-images/papaya3.jpg" alt="">';
    if (event.target.value == 'wonderland')
        return images.innerHTML = '<img  src="papaya-images/papaya4.jpg" alt="">';
}
FlagSelect(flags, 'handlepapaya', boot);
