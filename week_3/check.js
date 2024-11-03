function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    // your code here

    if (promises) {
      return new promises((resolve, reject) => {
        // handle edge cases where promises array is empty
        if (promises.length === 0) {
          return resolve([]);

          // immediately resolve with an empty array
        }

        //Initialize an array to store results and a counter for remaining promises
        const results = [];
        let remaining = promises.length;

        // Loop over each promise in the input array
        promises.forEach((promise, index) => {
          //convert non-promise values into promises
          Promise.resolve(promise)
            .then((value) => {
              results[index] = value;

              // Store result in the correct position
              remaining -= 1;
              // Decrement remaining promises counter

              // if all promises have resolved, resolve with the results array
              if (remaining === 0) {
                resolve(results);
              }
            })
            .catch(reject); // if any promise rejects, immediately reject the entire promise
        });
      });
    }
  });
}
