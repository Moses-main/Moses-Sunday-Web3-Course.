function loop(startValue, test, updateFun, bodyFun) {
  // start with initial value
  for (let value = startValue; test(value); value = updateFun(value)) {
    bodyFun(value);
  }
}

loop(
  3,
  (n) => n > 0, // test function: continue while n > 0
  (n) => n - 1, // update function: decrease n by 1
  console.log // body function: log the current value
);

// higher order functio loop that provides something like a for loop statment. it takess a value , a test function , an update function  and a body function. Each iteration, should first run the test function on the current loop value ad stop if that retuns fals. it should then call the body function , fiveing tit the current value and finally call the update function to create a new value and start over from the beginning.
