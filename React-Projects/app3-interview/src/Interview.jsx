// // 1.compose() and pipe() Polyfill
// // These are functional programming techniques to combine functions.

// // Compose: Right-to-left composition
// const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// // Pipe: Left-to-right composition
// const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// // Example:
// const add = x => x + 2;
// const multiply = x => x * 2;

// const result = compose(add, multiply)(5); // (5 * 2) + 2 = 12
// const result2 = pipe(add, multiply)(5);   // (5 + 2) * 2 = 14

// // 2.Polyfill for Promise.all, Promise.race, Promise.allSettled

// // Polyfill for Promise.all
// const myPromiseAll = (promises) => new Promise((resolve, reject) => {
//     let result = [];
//     let count = 0;
//     promises.forEach((promise, index) => {
//         promise.then(value => {
//             result[index] = value;
//             count++;
//             if (count === promises.length) resolve(result);
//         }).catch(reject);
//     });
// });

// // Polyfill for Promise.race
// const myPromiseRace = (promises) => new Promise((resolve, reject) => {
//     promises.forEach(promise => {
//         promise.then(resolve).catch(reject);
//     });
// });

// // Polyfill for Promise.allSettled
// const myPromiseAllSettled = (promises) => new Promise(resolve => {
//     let results = [];
//     let count = 0;
//     promises.forEach((promise, index) => {
//         promise.then(value => {
//             results[index] = { status: 'fulfilled', value };
//         }).catch(error => {
//             results[index] = { status: 'rejected', reason: error };
//         }).finally(() => {
//             count++;
//             if (count === promises.length) resolve(results);
//         });
//     });
// });

// //   3.Polyfills for map, filter, reduce, forEach

// // Map
// Array.prototype.myMap = function (callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this));
//     }
//     return result;
// };

// // Filter
// Array.prototype.myFilter = function (callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) result.push(this[i]);
//     }
//     return result;
// };

// // Reduce
// Array.prototype.myReduce = function (callback, initialValue) {
//     let accumulator = initialValue === undefined ? this[0] : initialValue;
//     for (let i = (initialValue === undefined ? 1 : 0); i < this.length; i++) {
//         accumulator = callback(accumulator, this[i], i, this);
//     }
//     return accumulator;
// };

// // ForEach
// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };

// //   4.Polyfill for Function.bind, call, and apply

// // Bind
// Function.prototype.myBind = function (context, ...args) {
//     return (...newArgs) => {
//         return this.apply(context, [...args, ...newArgs]);
//     };
// };

// // Call
// Function.prototype.myCall = function (context, ...args) {
//     context = context || globalThis;
//     const uniqueID = Symbol();
//     context[uniqueID] = this;
//     const result = context[uniqueID](...args);
//     delete context[uniqueID];
//     return result;
// };

// // Apply
// Function.prototype.myApply = function (context, args) {
//     context = context || globalThis;
//     const uniqueID = Symbol();
//     context[uniqueID] = this;
//     const result = context[uniqueID](...args);
//     delete context[uniqueID];
//     return result;
// };

// //   5. Async.parallel and Async.series

// const asyncParallel = (tasks, callback) => {
//     let results = [];
//     let completed = 0;

//     tasks.forEach((task, index) => {
//         task((error, result) => {
//             if (error) return callback(error);
//             results[index] = result;
//             completed++;
//             if (completed === tasks.length) callback(null, results);
//         });
//     });
// };

// const asyncSeries = (tasks, callback) => {
//     let results = [];
//     let index = 0;

//     const next = (error, result) => {
//         if (error) return callback(error);
//         results.push(result);
//         if (index === tasks.length) return callback(null, results);
//         tasks[index++](next);
//     };

//     next();
// };

// //   6. Build a Promise from Scratch

// class MyPromise {
//     constructor(executor) {
//         this.state = 'pending';
//         this.value = undefined;
//         this.reason = undefined;
//         this.callbacks = [];

//         const resolve = (value) => {
//             if (this.state === 'pending') {
//                 this.state = 'fulfilled';
//                 this.value = value;
//                 this.callbacks.forEach(callback => callback.onFulfilled(value));
//             }
//         };

//         const reject = (reason) => {
//             if (this.state === 'pending') {
//                 this.state = 'rejected';
//                 this.reason = reason;
//                 this.callbacks.forEach(callback => callback.onRejected(reason));
//             }
//         };

//         executor(resolve, reject);
//     }

//     then(onFulfilled, onRejected) {
//         return new MyPromise((resolve, reject) => {
//             const handleCallback = () => {
//                 if (this.state === 'fulfilled') {
//                     if (onFulfilled) resolve(onFulfilled(this.value));
//                     else resolve(this.value);
//                 } else if (this.state === 'rejected') {
//                     if (onRejected) reject(onRejected(this.reason));
//                     else reject(this.reason);
//                 } else {
//                     this.callbacks.push({
//                         onFulfilled: value => resolve(onFulfilled ? onFulfilled(value) : value),
//                         onRejected: reason => reject(onRejected ? onRejected(reason) : reason)
//                     });
//                 }
//             };
//             handleCallback();
//         });
//     }
// }

// 1. Fetch API
// The Fetch API is a modern interface used to make HTTP requests in JavaScript. It returns a Promise that resolves to the response of the request. It replaces older methods like XMLHttpRequest and provides a simpler, cleaner syntax for asynchronous data fetching.

// 🔹 2. Service Worker in PWAs
// A Service Worker is a background script that runs separately from the main browser thread in Progressive Web Apps (PWAs). It enables features like offline functionality, background sync, and push notifications by intercepting network requests and caching resources. It acts as a proxy between the web app and the network.

// 🔹 3. Deep Cloning of an Object
// Deep cloning refers to creating a complete copy of an object, including all nested objects and arrays. Unlike shallow copying, where only top-level references are copied, deep cloning duplicates every level of the structure to avoid unintentional side effects when the original object changes.

// 🔹 4. Modules in JavaScript
// JavaScript modules are reusable, self-contained pieces of code that can be imported and exported between files. Modules promote separation of concerns and maintainability. ES6 introduced native module syntax using export and import keywords, making modular development more standardized.

// 🔹 5. this Binding
// The this keyword in JavaScript refers to the object that is executing the current function. Its value depends on how the function is called:

// In a regular function, this refers to the global object (in non-strict mode).

// In an object method, this refers to the object itself.

// In arrow functions, this is lexically bound—it inherits from the surrounding scope.

// 🔹 6. Closures
// A closure is a function that retains access to its lexical scope even after the outer function has finished executing. Closures allow functions to "remember" variables from their outer scope, enabling patterns like data encapsulation, memoization, and function factories.

// 🔹 7. Preventing Default Event Behavior
// In JavaScript, calling event.preventDefault() inside an event handler stops the default action that belongs to the event (e.g., stopping a form from submitting or a link from navigating). It's commonly used for customizing form or link behavior.

// 🔹 8. Arrow Functions vs Regular Functions
// Arrow functions are a concise syntax for writing functions introduced in ES6. They differ from regular functions in several key ways:

// They do not have their own this; instead, they inherit it from their parent scope.

// They cannot be used as constructors.

// They do not have their own arguments object.

// 🔹 9. Promise Chaining
// Promise chaining is a technique where multiple asynchronous operations are performed in sequence using .then(). Each .then() receives the result of the previous promise, allowing structured and readable handling of async logic.

// 🔹 10. Purpose of Object.create()
// The Object.create() method creates a new object and sets its prototype to the specified object. This allows for controlled inheritance and creation of objects with specific behavior or shared methods without using class-based syntax.

// 🔹 11. Check if an Object is an Array
// To check if a value is an array, use the built-in Array.isArray() method. It reliably distinguishes arrays from other objects and is the recommended way to perform this check in modern JavaScript.


// 1. What are IIFE (Immediately Invoked Function Expressions)?
// An IIFE is a function that runs immediately after it's defined.
// It helps create a private scope, preventing variables from polluting the global scope.

// javascript
// Copy
// Edit
// (function() {
//   console.log("IIFE is running");
// })();
// You can also use arrow functions:

// javascript
// Copy
// Edit
// (() => {
//   console.log("Arrow IIFE");
// })();
// 🔹 2. How to create a custom event in JavaScript
// Custom events allow you to define and dispatch your own events:

// javascript
// Copy
// Edit
// // Create the event
// const myEvent = new CustomEvent("myCustomEvent", {
//   detail: { name: "Jagadeesh", age: 21 }
// });

// // Add an event listener
// document.addEventListener("myCustomEvent", (e) => {
//   console.log("Custom event received:", e.detail);
// });

// // Dispatch the event
// document.dispatchEvent(myEvent);
// 🔹 3. What is JSON, and how do you parse it?
// JSON (JavaScript Object Notation) is a lightweight format to store and exchange data.

// Parse (convert JSON string to object):

// javascript
// Copy
// Edit
// const jsonString = '{"name":"Jagadeesh","age":21}';
// const obj = JSON.parse(jsonString);
// console.log(obj.name); // Jagadeesh
// Stringify (convert object to JSON string):

// javascript
// Copy
// Edit
// const json = JSON.stringify(obj);
// console.log(json); // '{"name":"Jagadeesh","age":21}'
// 🔹 4. How to implement a simple event emitter
// An event emitter allows components to communicate using events:

// javascript
// Copy
// Edit
// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }

//   on(event, listener) {
//     (this.events[event] ||= []).push(listener);
//   }

//   emit(event, data) {
//     (this.events[event] || []).forEach(listener => listener(data));
//   }
// }

// // Usage
// const emitter = new EventEmitter();

// emitter.on("greet", (name) => {
//   console.log(`Hello, ${name}`);
// });

// emitter.emit("greet", "Jagadeesh");
// // 🔹 5. What are weak references in JavaScript?
// Weak references allow you to reference an object without preventing it from being garbage-collected.

// WeakMap and WeakSet are collections that hold weak references:

// javascript
// Copy
// Edit
// let obj = { name: "Jagadeesh" };
// const weakMap = new WeakMap();

// weakMap.set(obj, "some value");

// obj = null; // Now the object can be garbage collected
// Use cases: Caching, DOM element tracking without memory leaks.

// 🔹 6. How to optimize performance in large-scale applications
// Common strategies:

// Code Splitting (using dynamic import() in React/Webpack)

// Debouncing & Throttling (for input or scroll handlers)

// Memoization (e.g., React.memo, useMemo)

// Lazy Loading (load components/data only when needed)

// Avoid unnecessary re-renders (using shouldComponentUpdate, useCallback)

// Web Workers for heavy computations

// Efficient DOM manipulation (batch changes, avoid layout thrashing)

// 🔹 7. How to use localStorage and sessionStorage
// localStorage: persists even after browser is closed

// sessionStorage: cleared when the browser tab is closed

// javascript
// Copy
// Edit
// // localStorage
// localStorage.setItem("name", "Jagadeesh");
// console.log(localStorage.getItem("name")); // Jagadeesh

// // sessionStorage
// sessionStorage.setItem("token", "abc123");
// console.log(sessionStorage.getItem("token")); // abc123

