const Parallel = require('paralleljs');

const NUM_ARRAYS = 256;
const ARRAY_LENGTH = 256;

const range = (start, len) => Array.from(Array(len).keys()).map(n => n + start);

const xs = range(0, NUM_ARRAYS).map((_, index) => range(index * ARRAY_LENGTH, ARRAY_LENGTH)).reverse();

function max(a, b) { return Math.max(a, b); }
function reduceToMax(xs) { return xs.reduce(max, 0); }

const opts = {
    maxWorkers: 8
};

new Parallel(xs, opts)
    .require(max)
    .require(reduceToMax)
    .map(data => reduceToMax(data))
    .reduce(data => reduceToMax(data))
    .then(data => console.log(`then: ${data}`));
