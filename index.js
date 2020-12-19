console.log("Hola Mundo")

/*

////////////////////
// compose, pipe, trace
// add, remove,
// multiply, divide
// exponential
// sum_array
// multiply_array
// average_array
////////////////////
export const sum = b => a => a + b;
export const remove = b => a => a - b;
export const multiply = b => a => a * b;
export const divide = b => a => a / b;
export const pow = b => a => Math.pow(a, b);
export const exp = b => a => Math.pow(b, a);
export const log = b => a => Math.log(a) / Math.log(b);
//compose
export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
export const trace = label => value => { console.log(label, value); return value; };
export const flip = fn => (arg1) => (arg2) => fn(arg2)(arg1);
//arrays
export const concat = arr2 => arr => arr.concat(arr2)
export const map = fn => arr => arr.map(fn)
export const forEach = fn => arr => arr.forEach(fn)
export const filter = fn => arr => arr.filter(fn)
export const reduce = fn => i => arr => arr.reduce(fn, i)
export const averrage = n => a => b => a + b / n;
export const count = a => a.length
export const overArray = i => fn => arr => arr.reduce((prev, el) => fn(prev)(el), i)
export const summatory = i => fn => arr => arr.reduce((prev, el) => fn(arr.length)(prev)(el), i)
export const summatory0 = summatory(0);
export const summatory1 = summatory(1);
// mapper utils
export const extractFloat = property => item => parseFloat(item[property]);
export const extractInt = property => item => parseInt(item[property]);
export const extractValue = property => item => item[property];
*/