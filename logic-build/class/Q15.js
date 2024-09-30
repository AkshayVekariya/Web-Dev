color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function ordinal(ordinal) {
  o = ["th", "st", "nd", "rd"];
  x = ordinal % 100;
  return x + (o[(x - 20) % 10] || o[x] || o[0]);
}

for (const a in color) {
    let num = a;
    num++;
  console.log(`${ordinal(num)}  choice is ${color[a]}`);
}
