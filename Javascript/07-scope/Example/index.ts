const y: any = 23; //global const
let w = 34; //global variable

for (var i = 0; i < 5; i++) {
  console.log(i);
  console.log(y);
  const x = 25;
  let z = 45;
  z=3000;

  for(let j = 0;j<3;j++){
      console.log(z);
      let u = 400;
  }

 
}

//1000 lines later

//1000 lanes later
console.log(y + 2); //25


