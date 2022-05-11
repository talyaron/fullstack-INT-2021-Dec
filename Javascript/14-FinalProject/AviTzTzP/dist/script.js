var header = document.querySelector("header");
var changes = document.querySelector(".changes");
var backgroundMainImg = document.querySelector(".mainimg");
var svgTextMainImg = document.querySelector(".mainheadline");
var ulnavbar = document.querySelector(".ulnavbar");
var carrouselimages = document.querySelector('.carrouselimages');
// console.log(imgUrlUpload.className);
// -------------- inputs for the images ------------------- //
var imgUrlUpload = document.querySelector(".imgurlupload");
var imgFileUpload = document.querySelector(".imgfileupload");
function handleChooseSection(ev) {
    var liitem = [];
    switch (ev.target.className.split(" ")[1]) {
        case "section1":
            changes.style.display = "block";
            changes.childNodes.forEach(function (e) {
                if (e.childNodes.length > 0) {
                    liitem.push(e);
                }
                for (var _i = 0, liitem_1 = liitem; _i < liitem_1.length; _i++) {
                    var li = liitem_1[_i];
                    if (li.className.split(" ")[0] !== "sec1") {
                        li.style.display = "none";
                    }
                    else {
                        li.style.display = 'flex';
                    }
                }
            });
            break;
        case "section2":
            changes.style.display = "block";
            changes.childNodes.forEach(function (e) {
                if (e.childNodes.length > 0) {
                    liitem.push(e);
                }
                for (var _i = 0, liitem_2 = liitem; _i < liitem_2.length; _i++) {
                    var li = liitem_2[_i];
                    if (li.className.split(" ")[0] !== "sec2") {
                        li.style.display = "none";
                    }
                    else {
                        li.style.display = 'flex';
                    }
                }
            });
            break;
        case "section3":
            changes.style.display = "block";
            changes.childNodes.forEach(function (e) {
                if (e.childNodes.length > 0) {
                    liitem.push(e);
                }
                for (var _i = 0, liitem_3 = liitem; _i < liitem_3.length; _i++) {
                    var li = liitem_3[_i];
                    if (li.className.split(" ")[0] !== "sec3") {
                        li.style.display = "none";
                    }
                    else {
                        li.style.display = 'flex';
                    }
                }
            });
            break;
    }
}
function handleCloseIcon(ev) {
    changes.style.display = "none";
}
var fileGallery = new FileReader();
function handleBackImgPhotoFile(ev) {
    switch (ev.target.parentNode.className.split(" ")[0]) {
        case 'sec1':
            var file_1 = new FileReader();
            file_1.onload = function () {
                backgroundMainImg.style.backgroundImage = "url(\"" + file_1.result + "\")";
            };
            file_1.readAsDataURL(ev.target.files[0]);
            break;
        case 'sec2':
            fileGallery.onload = function () { };
            fileGallery.readAsDataURL(ev.target.files[0]);
            break;
    }
}
function handleBackImgPhoto(ev) {
    switch (ev.target.parentNode.className.split(" ")[0]) {
        case 'sec1':
            var imgURL = ev.target.value;
            backgroundMainImg.style.backgroundImage = "url(\"" + imgURL + "\")";
            break;
    }
}
function handleFontSize(ev) {
    switch (ev.target.parentNode.className.split(" ")[0]) {
        case 'sec1':
            if (!Number(ev.key) && ev.key !== "0") {
                return ev.preventDefault();
            }
            else {
                ev.target.addEventListener("keyup", function (e) {
                    svgTextMainImg.style.fontSize = ev.target.value + "px";
                });
            }
            break;
        case 'sec2':
            switch (ev.target.className.split(" ")[1]) {
                case "fontsizeheadlineabout":
                    if (!Number(ev.key) && ev.key !== "0") {
                        return ev.preventDefault();
                    }
                    else {
                        ev.target.addEventListener("keyup", function (e) {
                            document.querySelector('.aboutheadline').style.fontSize = ev.target.value + "px";
                        });
                    }
                    break;
                case 'fontsizedescriptionabout':
                    if (!Number(ev.key) && ev.key !== "0") {
                        return ev.preventDefault();
                    }
                    else {
                        ev.target.addEventListener("keyup", function (e) {
                            document.querySelector('.aboutdescription').style.fontSize = ev.target.value + "px";
                        });
                    }
            }
            break;
    }
}
function handleFontFamily(ev) {
    switch (ev.target.parentNode.className.split(" ")[0]) {
        case "sec1":
            svgTextMainImg.style.fontFamily = ev.target.value;
            setTimeout(function () {
                ev.target.placeholder = ev.target.value;
                ev.target.value = "";
            }, 10);
            break;
        case "sec2":
            switch (ev.target.className.split(' ')[1]) {
                case 'aboutffheadlineinput':
                    document.querySelector('.aboutheadline').style.fontFamily = ev.target.value;
                    setTimeout(function () {
                        ev.target.placeholder = ev.target.value;
                        ev.target.value = "";
                    }, 10);
                    break;
                case 'aboutffdescriptioninput':
                    document.querySelector('.aboutdescription').style.fontFamily = ev.target.value;
                    setTimeout(function () {
                        ev.target.placeholder = ev.target.value;
                        ev.target.value = "";
                    }, 10);
                    break;
                case 'galleyffinput':
                    document.querySelector('.galleryheadline').style.fontFamily = ev.target.value;
                    setTimeout(function () {
                        ev.target.placeholder = ev.target.value;
                        ev.target.value = "";
                    }, 10);
                    break;
            }
            break;
    }
}
function handlePickColor(ev) {
    switch (ev.target.parentNode.className.split(" ")[0]) {
        case 'sec1':
            switch (ev.target.className.split(" ")[1]) {
                case "colorsvg":
                    svgTextMainImg.style.fill = ev.target.value;
                    break;
                case "strokesvg":
                    svgTextMainImg.style.stroke = ev.target.value;
                    break;
                case "navbackground":
                    header.style.backgroundColor = ev.target.value;
                    ulnavbar.style.backgroundColor = ev.target.value;
                    break;
                case "navtextcolor":
                    var lis = ulnavbar.children;
                    for (var _i = 0, lis_1 = lis; _i < lis_1.length; _i++) {
                        var li = lis_1[_i];
                        li.style.color = ev.target.value;
                    }
                    break;
            }
            break;
        case 'sec2':
            switch (ev.target.className.split(" ")[1]) {
                case 'colorheadlineabout':
                    document.querySelector('.aboutheadline').style.color = ev.target.value;
                    break;
                case 'colordescriptionabout':
                    document.querySelector('.aboutdescription').style.color = ev.target.value;
                    break;
                case 'strokegallery':
                    document.querySelector('.gallerysec').style.border = "ridge 5px " + ev.target.value;
                    document.querySelector('.galleryheadline').style.backgroundColor = ev.target.value;
                    break;
                case 'backcolorgallery':
                    document.querySelector('.gallerysec').style.backgroundColor = ev.target.value;
                    break;
                case 'textcolorgallery':
                    document.querySelector('.galleryheadline').style.color = ev.target.value;
                    break;
            }
            break;
    }
}
var parAbout = document.querySelector('.aboutdescription');
function handleEditText(ev) {
    switch (ev.target.parentNode.className.split(" ")[0]) {
        case "sec1":
            switch (ev.target.className.split(" ")[1]) {
                case "inserttext":
                    svgTextMainImg.firstElementChild.textContent = ev.target.value;
                    break;
            }
            break;
        case "sec2":
            switch (ev.target.className.split(" ")[1]) {
                case 'insertaboutheadline':
                    document.querySelector('.aboutheadline').textContent = ev.target.value;
                    break;
                case 'descriptiontextabout':
                    parAbout.textContent = ev.target.value;
                    break;
                case 'insertgalleryheadline':
                    document.querySelector('.galleryheadline').textContent = ev.target.value;
                    break;
            }
            break;
    }
}
var evDragStart, evDragDrop;
function handleOnDrag(ev) {
    evDragStart = ev.target;
    swapList(evDragStart, evDragDrop);
}
function handleDragOver(ev) {
    ev.preventDefault();
}
function handleDragLeave(ev) {
    ev.target.classList.remove("itementer");
}
function handleOnEnter(ev) {
    ev.target.classList.add("itementer");
}
function handleOnDropt(ev) {
    evDragDrop = ev.target;
    ev.target.classList.remove("itementer");
}
function swapList(dragStart, dragDrop) {
    if (dragStart.parentNode.className !== dragDrop.parentNode.className && dragDrop.className !== 'delete')
        return;
    switch (dragDrop.parentNode.className.split(' ')[0]) {
        case 'sec1':
            if (dragDrop.className === "delete" && dragStart.className === 'navbaroption') {
                dragStart.remove(dragStart);
            }
            break;
        case 'sec2':
            if (dragDrop.className === "delete" && dragStart.className === 'carrouselimage') {
                dragStart.remove(dragStart);
                imageArray.splice(counterImg, 1);
                if (counterImg === imageArray.length) {
                    counterImg--;
                    currentImg--;
                }
                imageArray[counterImg].style.display = 'block';
            }
            break;
        case 'ulnavbar':
            if (dragDrop.parentNode.className === 'carrouselimages') {
                return;
            }
            else {
                var liSwapStart = dragStart.innerHTML;
                var liSwapDrop = dragDrop.innerHTML;
                dragStart.innerHTML = liSwapDrop;
                dragDrop.innerHTML = liSwapStart;
            }
            break;
    }
    // switch (dragStart.className) {
    //     case 'carrouselimage':
    //         if (dragDrop.className = 'delete') {
    //             console.log('basdae')
    //         }
    //         break;
    // }
}
function handleCreateElement(ev) {
    switch (ev.target.parentNode.className.split(" ")[0]) {
        case 'sec1':
            var nameOption = document.querySelector(".createlement").value;
            if (nameOption === "") {
                return;
            }
            var li = document.createElement("li");
            li.setAttribute("class", "navbaroption");
            li.setAttribute("draggable", "true");
            li.setAttribute("ondragenter", "handleOnEnter(event)");
            li.setAttribute("ondrop", "handleOnDropt(event)");
            li.setAttribute("ondragend", "handleOnDrag(event)");
            li.setAttribute("ondragover", "handleDragOver(event)");
            li.setAttribute("ondragleave", "handleDragLeave(event)");
            li.innerHTML = nameOption;
            li.style.color = document.querySelector(".navtextcolor").value;
            ulnavbar.appendChild(li);
            break;
        case 'sec2':
            imageArray = [];
            counterImg++;
            currentImg++;
            var newImage = document.createElement('img');
            newImage.setAttribute('src', "" + fileGallery.result);
            newImage.setAttribute('class', 'carrouselimage');
            newImage.setAttribute("draggable", "true");
            newImage.setAttribute("ondragenter", "handleOnEnter(event)");
            newImage.setAttribute("ondrop", "handleOnDropt(event)");
            newImage.setAttribute("ondragend", "handleOnDrag(event)");
            newImage.setAttribute("ondragover", "handleDragOver(event)");
            newImage.setAttribute("ondragleave", "handleDragLeave(event)");
            carrouselimages.appendChild(newImage);
            carrouselimages.childNodes.forEach(function (e) {
                if (e.nodeName == 'IMG') {
                    imageArray.push(e);
                }
            });
            for (var i = 0; i < imageArray.length; i++) {
                if (i !== counterImg) {
                    imageArray[i].style.display = 'none';
                }
            }
            if (carrouselimages.style.border !== 'none') {
                carrouselimages.style.border = 'none';
            }
            break;
    }
}
var imageArray = [];
var counterImg = -1, currentImg = 0;
function handleImageCarrousel(ev) {
    if (imageArray.length === 0 || imageArray.length === 1)
        return;
    switch (ev.target.className.split(" ")[2]) {
        case 'forward':
            currentImg++;
            counterImg++;
            if (currentImg > imageArray.length) {
                currentImg = 1;
                counterImg = 0;
                imageArray[counterImg].style.display = 'block';
                for (var i = 0; i < imageArray.length; i++) {
                    if (i !== counterImg) {
                        imageArray[i].style.display = 'none';
                    }
                }
            }
            else {
                imageArray[counterImg].style.display = 'block';
                for (var i = 0; i < imageArray.length; i++) {
                    if (i !== counterImg) {
                        imageArray[i].style.display = 'none';
                    }
                }
            }
            break;
        case 'backwards':
            counterImg--;
            currentImg--;
            if (currentImg <= 0) {
                currentImg = imageArray.length;
                counterImg = imageArray.length - 1;
                imageArray[counterImg].style.display = 'block';
                for (var i = 0; i < imageArray.length; i++) {
                    if (i !== counterImg) {
                        imageArray[i].style.display = 'none';
                    }
                }
            }
            else {
                imageArray[counterImg].style.display = 'block';
                for (var i = 0; i < imageArray.length; i++) {
                    if (i !== counterImg) {
                        imageArray[i].style.display = 'none';
                    }
                }
            }
            break;
    }
}
