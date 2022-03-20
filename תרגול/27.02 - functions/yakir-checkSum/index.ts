function checksum() {
  const a = +prompt(`enter first number`);
  const b = +prompt(`enter second number`);
  const c = +prompt(`enter tierd number`);

  if (a + b == c) {
    console.log(`${a}+${b}=${c}`);
  } else {
    console.log(`${a}+${b}!=${c}`);
  }
}

checksum();
