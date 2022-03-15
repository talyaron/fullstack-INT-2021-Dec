"use strict";

var div2 = document.querySelector("#two");
var button = document.querySelector("button");
button.addEventListener('click', function () {
  div2.scrollIntoView({
    behavior: 'smooth',
    //default: auto
    block: 'nearest',
    //start, center, end, nearest //default:start //יישור אנכי
    inline: 'center' //start, center, end, nearest //default:nearest //יישור אופקי

  });
});
var up = document.querySelector(".up");
up.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
var scrollPosition = 0;
window.addEventListener('scroll', function () {
  scrollPosition = window.scrollY;
  console.log(scrollPosition);

  if (scrollPosition > 1000) {
    div2.style.background = "red";
  } else if (scrollPosition < 1000) {
    div2.style.background = "blue";
  }
});