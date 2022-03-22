var balloons = document.querySelectorAll('.balloon');
balloons.forEach(function (Element) {
    Element.style.top = "-12vh";
    Element.style.left = "Math.floor(Math.random() * 100)+wh";
});
