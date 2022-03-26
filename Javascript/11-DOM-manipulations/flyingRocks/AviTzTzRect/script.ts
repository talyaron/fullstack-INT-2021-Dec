const divs = document.querySelectorAll("div");

let c = [];

function movingdivs() {
  let d = [];
  divs.forEach((e) => {
    
    d.push(e.getBoundingClientRect());
    let a = Math.floor(Math.random() * innerHeight - 50);
    let b = Math.floor(Math.random() * innerWidth - 50);
//--------------- Check if its inside the the screen-------------//
    if (a < 0) {
      e.style.top = a + 50 + "px";
    } else if (b < 0) {
      e.style.top = b + 50 + "px";
    } else {
      e.style.top = a + "px";
      e.style.left = b + "px";
    }
    c.push(e);
  });
  return c;
}

function getLocation(arr) {
  let top = [];
  let left = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      top.push(parseInt(arr[i].style.top), parseInt(arr[j].style.top));
      left.push(parseInt(arr[i].style.left), parseInt(arr[j].style.left));
      if (Number.isNaN(left[0])) left[0] = 0;
      if (Number.isNaN(left[1])) left[1] = 0;
      if (
        (top[0] === top[1] && Math.max(...left) - Math.min(...left) < 50) ||
        (left[0] === left[1] && Math.max(...top) - Math.min(...top) < 50)
      ) {
        console.log(`they clash on point`);
        console.dir(arr[i]);
        console.log(arr[j]);
      } else if (
        Math.max(...top) - Math.min(...top) < 52 &&
        Math.max(...left) - Math.min(...left) < 52
      ) {
        console.log(`they clash on point`);
        console.dir(arr[i]);
        console.log(arr[j]);
        top = [];
        left = [];
      } else {
        top = [];
        left = [];
      }
    }
  }
}

getLocation(movingdivs())

// const x = setInterval(movingdivs,7000)
