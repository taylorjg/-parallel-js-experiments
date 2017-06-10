const Parallel = require('paralleljs');

const xs1 = Array.from(Array(100).keys());
const xs2 = Array.from(Array(100).keys()).map(x => x + 100);
const xs3 = Array.from(Array(100).keys()).map(x => x + 200).reverse();
const xs = [].concat(xs1, xs2, xs3);
console.log(`xs: ${xs}`);

const ys1 = xs.slice(0, 75);
const ys2 = xs.slice(75, 150);
const ys3 = xs.slice(150, 225);
const ys4 = xs.slice(225, 300);
console.log(`ys1: ${ys1}`);
console.log(`ys2: ${ys2}`);
console.log(`ys3: ${ys3}`);
console.log(`ys4: ${ys4}`);
