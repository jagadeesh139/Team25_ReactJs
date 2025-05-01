// 1.compose() and pipe() Polyfill
// These are functional programming techniques to combine functions.

// Compose: Right-to-left composition
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// Pipe: Left-to-right composition
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// Example:
const add = x => x + 2;
const multiply = x => x * 2;

const result = compose(add, multiply)(5); // (5 * 2) + 2 = 12
const result2 = pipe(add, multiply)(5);   // (5 + 2) * 2 = 14

// 2.Polyfill for Promise.all, Promise.race, Promise.allSettled

// Polyfill for Promise.all
const myPromiseAll = (promises) => new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    promises.forEach((promise, index) => {
      promise.then(value => {
        result[index] = value;
        count++;
        if (count === promises.length) resolve(result);
      }).catch(reject);
    });
  });
  
  // Polyfill for Promise.race
  const myPromiseRace = (promises) => new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(resolve).catch(reject);
    });
  });
  
  // Polyfill for Promise.allSettled
  const myPromiseAllSettled = (promises) => new Promise(resolve => {
    let results = [];
    let count = 0;
    promises.forEach((promise, index) => {
      promise.then(value => {
        results[index] = { status: 'fulfilled', value };
      }).catch(error => {
        results[index] = { status: 'rejected', reason: error };
      }).finally(() => {
        count++;
        if (count === promises.length) resolve(results);
      });
    });
  });

//   3.Polyfills for map, filter, reduce, forEach

// Map
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
  
  // Filter
  Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) result.push(this[i]);
    }
    return result;
  };
  
  // Reduce
  Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    for (let i = (initialValue === undefined ? 1 : 0); i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  
  // ForEach
  Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  