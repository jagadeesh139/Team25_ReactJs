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

//   Polyfill for Promise.allSettled
// Promise.allSettled waits for all promises and returns their status/result, even if some fail.
function promiseAllSettled(promises) {
    return new Promise((resolve) => {
        let results = [];
        let completed = 0;

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then(value => {
                    results[index] = { status: 'fulfilled', value };
                })
                .catch(reason => {
                    results[index] = { status: 'rejected', reason };
                })
                .finally(() => {
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                });
        });
    });
}

// Example
promiseAllSettled([
    Promise.resolve(1),
    Promise.reject('error'),
    Promise.resolve(3)
]).then(console.log);
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: 'error' },
//   { status: 'fulfilled', value: 3 }
// ]


4. Implement the Function.bind, call, and apply methods on the Function prototype


1. Polyfill for Function.prototype.call
call: Immediately calls the function with a this context and arguments passed one by one.

    javascript
Copy
Edit
Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis; // fallback for null/undefined
    const fnSymbol = Symbol(); // Create a unique property
    context[fnSymbol] = this; // "this" is the function

    const result = context[fnSymbol](...args); // Call function
    delete context[fnSymbol]; // Clean up
    return result;
};

// Example
function greet(age) {
    return `Hello ${this.name}, age ${age}`;
}
const user = { name: "Jagadeesh" };

console.log(greet.myCall(user, 23)); // Hello Jagadeesh, age 23
2. Polyfill for Function.prototype.apply
apply: Like call, but arguments are passed as an array.

    javascript
Copy
Edit
Function.prototype.myApply = function (context, args = []) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;

    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
};

// Example
function greet(age, country) {
    return `Hello ${this.name}, age ${age}, from ${country}`;
}
const user = { name: "Jagadeesh" };

console.log(greet.myApply(user, [23, "India"]));
// Hello Jagadeesh, age 23, from India
3. Polyfill for Function.prototype.bind
bind: Returns a new function bound to a specific this and optionally pre - filled arguments.It does not call immediately.

    javascript
Copy
Edit
Function.prototype.myBind = function (context, ...bindArgs) {
    const originalFn = this;
    return function (...callArgs) {
        return originalFn.apply(context, [...bindArgs, ...callArgs]);
    };
};

// Example
function greet(age, country) {
    return `Hello ${this.name}, age ${age}, from ${country}`;
}
const user = { name: "Jagadeesh" };

const boundGreet = greet.myBind(user, 23);

console.log(boundGreet("India"));
// Hello Jagadeesh, age 23, from India

