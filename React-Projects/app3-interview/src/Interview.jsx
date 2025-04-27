// CompositionEvent(polyfill)
function compose(...fns) {
    return function (initialValue) {
      return fns.reduceRight((acc, fn) => fn(acc), initialValue);
    };
  }
  
  // Example
  const add5 = x => x + 5;
  const double = x => x * 2;
  const subtract3 = x => x - 3;
  
  const composedFn = compose(subtract3, double, add5);
  
  console.log(composedFn(5)); 
  // Step by step: add5(5) = 10, double(10) = 20, subtract3(20) = 17
  // Output: 17

  pipe(polyfil)
  function pipe(...fns) {
    return function (initialValue) {
      return fns.reduce((acc, fn) => fn(acc), initialValue);
    };
  }
  
  // Example
  const add5 = x => x + 5;
  const double = x => x * 2;
  const subtract3 = x => x - 3;
  
  const pipedFn = pipe(add5, double, subtract3);
  
  console.log(pipedFn(5)); 
  // Step by step: add5(5) = 10, double(10) = 20, subtract3(20) = 17
  // Output: 17
  

//   Polyfill for Promise.all
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      let result = [];
      let completed = 0;
  
      promises.forEach((p, index) => {
        Promise.resolve(p).then(value => {
          result[index] = value;
          completed++;
  
          if (completed === promises.length) {
            resolve(result);
          }
        }).catch(reject);
      });
    });
  }
  
  // Example
  promiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
    .then(console.log) // [1, 2, 3]
    .catch(console.error);

    // Polyfill for Promise.race

    function promiseRace(promises) {
        return new Promise((resolve, reject) => {
          promises.forEach(p => {
            Promise.resolve(p).then(resolve).catch(reject);
          });
        });
      }
      
      // Example
      promiseRace([
        new Promise(res => setTimeout(() => res("First"), 100)),
        new Promise(res => setTimeout(() => res("Second"), 200))
      ]).then(console.log); // "First"
      
  