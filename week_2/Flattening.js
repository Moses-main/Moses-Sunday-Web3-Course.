function flattening(n) {
  let total = n.reduce((a, b) => a.concat(b), []);
  return total;
}

// Example
console.log(
  flattening([
    [3, 5, 2],
    [3, 5, 6],
  ])
);
