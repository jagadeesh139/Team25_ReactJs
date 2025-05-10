Polyfills for Array Methods
1. Polyfill for map
javascript
Copy
Edit
Array.prototype.myMap = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Example
console.log([1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]
2. Polyfill for filter
javascript
Copy
Edit
Array.prototype.myFilter = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Example
console.log([1, 2, 3, 4].myFilter(x => x % 2 === 0)); // [2, 4]
3. Polyfill for reduce
javascript
Copy
Edit
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for(let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// Example
console.log([1, 2, 3, 4].myReduce((acc, val) => acc + val, 0)); // 10
4. Polyfill for forEach
javascript
Copy
Edit
Array.prototype.myForEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Example
[1, 2, 3].myForEach((item) => console.log(item));
// Output: 1 2 3
