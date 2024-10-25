// First Version: Using a for loop

// function every(array, test) {
//   for (let value of array) {
//     if (!test(value)) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(every([1, 3, 4], (n) => n < 5));

//Second Version: Using some method

function every(array, test) {
  return !array.some((element) => !test(element));
}
