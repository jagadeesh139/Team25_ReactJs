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

