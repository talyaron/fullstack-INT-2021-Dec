var image_output = document.querySelector('#image_output');
var name_output = document.querySelector('#name_output');
var price_output = document.querySelector('#price_output');
var item_avalible = document.querySelector('#item_avalible');
function handleBtn(ev) {
    ev.preventDefault();
    var image = ev.target.elements.image.files[0];
    var nameinput = ev.target.elements.name.value;
    var priceinput = ev.target.elements.price.value;
    console.log(image, nameinput, priceinput);
    var item = { image: image, nameinput: nameinput, priceinput: priceinput };
    console.log(item.image);
    var imgSrc = URL.createObjectURL(item.image);
    // const imagePreview = document.querySelector('#image-preview')
    // imagePreview.src = imgSrc
    name_output.innerHTML = "<div>item name:" + nameinput + "</div>";
    price_output.innerHTML = "<div>item price:" + priceinput + "</div>";
    image_output.innerHTML = "<img src=\"" + imgSrc + "\" alt=\"\"> </div>";
    // image.addEventListener("change", function () {
    //     const file = this.files[0]
    //     console.log(file)
    // })
}
// image_input.addEventListener("change", function() {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//       const uploaded_image = reader.result;
//       image_output.style.backgroundImage = `url(${uploaded_image})`;
//  });
//     reader.readAsDataURL(this.files[0]);
//  });
