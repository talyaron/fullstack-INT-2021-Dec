var result = {};
// let user:users={
// }
var manager = {
    name: "Tal Yaron",
    username: "tal",
    password: "1234"
};
function handleUser(ev) {
    ev.preventDefault();
    var details = ev.target.elements;
    for (var i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
            result[details[i].name] = details[i].value;
        }
    }
    // console.log(result['name']) 
    // console.log(manager['name'])
    // console.log(result['pass'])
    // console.log(manager['password'])
    if (result['name'] == manager['name'] && result['pass'] == manager['password']) {
        window.location.href = "index1.html";
    }
}
function handleNew(ev) {
    var root = document.querySelector("#root");
    var myButton = document.querySelector("#button2");
    myButton.style.backgroundColor = "gray";
    root.innerHTML += "<div id=\"newitem\">\n                            <form action=\"\" onsubmit=\"handleNewProduct(event)\">\n                                <input type=\"text\" name=\"typeName\" placeholder=\"Enter type of item\">\n                                <input type=\"text\" name=\"serialNo\" placeholder=\"Enter serial number of item\">\n                                <input type=\"text\" name=\"description\" placeholder=\"Enter description of item\">\n                                <input type=\"number\" name=\"price\" placeholder=\"Enter a price\" >\n                                <input type=\"text\" name=\"currencty\" placeholder=\"Enter currency\">\n                                <input type=\"file\" name=\"imageFile\" placeholder = \"Please pick the image of the item\">\n                                <button type=\"submit\">SEND</button>\n                            </form>\n                            <img id=\"output\" width=\"200\"/>\n                        </div>";
    //image.src = URL.createObjectURL(ev.target.files[0]);
    var newitem = document.querySelector("#newitem");
    newitem.style.display = "flex";
    newitem.style.flexDirection = "column";
    newitem.style.position = "absolute";
    newitem.style.top = "250px";
    newitem.style.left = "400px";
    //newitem.style.border = "1px solid black"
    //root.style.border="1px solid black"
    //<p><label for="file" style="cursor: pointer;" onclick="handleHidden(event)">Upload Image</label></p>
}
function handleNewProduct(ev) {
    console.log("we are here");
    ev.preventDefault();
    var details = ev.target.elements;
    console.dir(details);
    for (var i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
            if (details[i].name == "imageFile") {
                result['imageFile'] = details['imageFile'].files[0];
                console.log(result['imageFile']);
            }
            else {
                result[details[i].name] = details[i].value;
            }
        }
        // מקודם הקוד היה כאן והפונקציה לא הייתה סגורה. 
    }
    console.log(result['imageFile']);
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(result["imageFile"]);
    //אם את רוצה להכניס משתנים שאת מקבלת מהמשתמש לאובייקט חדש, ההכרזה רציכה להיות עם ריזאלט.
    // let newProduct: product = {
    //     name: result['typeName'],
    //     serialNo: result['serailNo'],
    //     description: result['description'],
    //     price: result["price"],
    //     currency: result['currency'],
    //     Pimage: result['file']
    // }
    var newProduct = {
        name: details['typeName'],
        serialNo: details['serailNo'],
        description: details['description'],
        price: details["price"],
        currency: details['currency'],
        Pimage: details['file']
    };
    console.log(newProduct);
}
// <p><img id="output" width="200" /></p>
// <p><label for="file" style="cursor: pointer;" onclick="handleHidden(event)">Upload Image</label></p>
// <div id="addItemName"></div>
// <div id="addItemPrice"></div>
// </div>
// <button onclick="handleDelete(event)"> delete item</button>`
var loadImg = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};
function handleHidden(ev) {
    ev.target.hidden = true;
}
function handleItem1(ev) {
    console.log(ev);
    var content = ev.target.value;
    var div = document.querySelector("#addItemName");
    div.innerHTML = "<p>" + content + "</p>";
    ev.target.hidden = true;
}
function handleItem0(ev) {
    console.log(ev);
    var content = ev.target.value;
    var div = document.querySelector("#addItemPrice");
    div.innerHTML = "<p>" + content + " \u05E9\"\u05D7</p>";
    ev.target.hidden = true;
}
function handleDelete(ev) {
    var catchItem = document.querySelector("#newitem");
    console.log(catchItem);
    catchItem.innerHTML = "";
    ev.target.hidden = true;
}
