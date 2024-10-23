// 8x 8 grid system
let grid = "";
let size = 8;

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      grid += " ";
    } else {
      grid += "#";
    }
  }
  grid += "\n";
  console.log(grid);
}
