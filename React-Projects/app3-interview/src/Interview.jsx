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
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Filter
Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) result.push(this[i]);
    }
    return result;
};

// Reduce
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    for (let i = (initialValue === undefined ? 1 : 0); i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// ForEach
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

//   4.Polyfill for Function.bind, call, and apply

// Bind
Function.prototype.myBind = function (context, ...args) {
    return (...newArgs) => {
        return this.apply(context, [...args, ...newArgs]);
    };
};

// Call
Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis;
    const uniqueID = Symbol();
    context[uniqueID] = this;
    const result = context[uniqueID](...args);
    delete context[uniqueID];
    return result;
};

// Apply
Function.prototype.myApply = function (context, args) {
    context = context || globalThis;
    const uniqueID = Symbol();
    context[uniqueID] = this;
    const result = context[uniqueID](...args);
    delete context[uniqueID];
    return result;
};

//   5. Async.parallel and Async.series

const asyncParallel = (tasks, callback) => {
    let results = [];
    let completed = 0;

    tasks.forEach((task, index) => {
        task((error, result) => {
            if (error) return callback(error);
            results[index] = result;
            completed++;
            if (completed === tasks.length) callback(null, results);
        });
    });
};

const asyncSeries = (tasks, callback) => {
    let results = [];
    let index = 0;

    const next = (error, result) => {
        if (error) return callback(error);
        results.push(result);
        if (index === tasks.length) return callback(null, results);
        tasks[index++](next);
    };

    next();
};

//   6. Build a Promise from Scratch

class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.callbacks = [];

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.callbacks.forEach(callback => callback.onFulfilled(value));
            }
        };

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.callbacks.forEach(callback => callback.onRejected(reason));
            }
        };

        executor(resolve, reject);
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const handleCallback = () => {
                if (this.state === 'fulfilled') {
                    if (onFulfilled) resolve(onFulfilled(this.value));
                    else resolve(this.value);
                } else if (this.state === 'rejected') {
                    if (onRejected) reject(onRejected(this.reason));
                    else reject(this.reason);
                } else {
                    this.callbacks.push({
                        onFulfilled: value => resolve(onFulfilled ? onFulfilled(value) : value),
                        onRejected: reason => reject(onRejected ? onRejected(reason) : reason)
                    });
                }
            };
            handleCallback();
        });
    }
}


1. What are IIFE (Immediately Invoked Function Expressions)?
An IIFE is a function that runs immediately after it's defined.
It helps create a private scope, preventing variables from polluting the global scope.

javascript
Copy
Edit
(function() {
  console.log("IIFE is running");
})();
You can also use arrow functions:

javascript
Copy
Edit
(() => {
  console.log("Arrow IIFE");
})();
🔹 2. How to create a custom event in JavaScript
Custom events allow you to define and dispatch your own events:

javascript
Copy
Edit
// Create the event
const myEvent = new CustomEvent("myCustomEvent", {
  detail: { name: "Jagadeesh", age: 21 }
});

// Add an event listener
document.addEventListener("myCustomEvent", (e) => {
  console.log("Custom event received:", e.detail);
});

// Dispatch the event
document.dispatchEvent(myEvent);
🔹 3. What is JSON, and how do you parse it?
JSON (JavaScript Object Notation) is a lightweight format to store and exchange data.

Parse (convert JSON string to object):

javascript
Copy
Edit
const jsonString = '{"name":"Jagadeesh","age":21}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Jagadeesh
Stringify (convert object to JSON string):

javascript
Copy
Edit
const json = JSON.stringify(obj);
console.log(json); // '{"name":"Jagadeesh","age":21}'
🔹 4. How to implement a simple event emitter
An event emitter allows components to communicate using events:

javascript
Copy
Edit
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    (this.events[event] ||= []).push(listener);
  }

  emit(event, data) {
    (this.events[event] || []).forEach(listener => listener(data));
  }
}

// Usage
const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

emitter.emit("greet", "Jagadeesh");
// 🔹 5. What are weak references in JavaScript?
Weak references allow you to reference an object without preventing it from being garbage-collected.

WeakMap and WeakSet are collections that hold weak references:

javascript
Copy
Edit
let obj = { name: "Jagadeesh" };
const weakMap = new WeakMap();

weakMap.set(obj, "some value");

obj = null; // Now the object can be garbage collected
Use cases: Caching, DOM element tracking without memory leaks.

🔹 6. How to optimize performance in large-scale applications
Common strategies:

Code Splitting (using dynamic import() in React/Webpack)

Debouncing & Throttling (for input or scroll handlers)

Memoization (e.g., React.memo, useMemo)

Lazy Loading (load components/data only when needed)

Avoid unnecessary re-renders (using shouldComponentUpdate, useCallback)

Web Workers for heavy computations

Efficient DOM manipulation (batch changes, avoid layout thrashing)

🔹 7. How to use localStorage and sessionStorage
localStorage: persists even after browser is closed

sessionStorage: cleared when the browser tab is closed

javascript
Copy
Edit
// localStorage
localStorage.setItem("name", "Jagadeesh");
console.log(localStorage.getItem("name")); // Jagadeesh

// sessionStorage
sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token")); // abc123

