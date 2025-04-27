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
  