const Parallel = require('paralleljs');

function max(a, b) { return Math.max(a, b); }
function reduceToMax(xs) { return xs.reduce(max, 0); }

const doIt = (data, maxWorkers) => {

    const opts = {
        maxWorkers
    };

    const timerName = `timer-${maxWorkers}`;
    console.time(timerName);

    return new Parallel(data, opts)
        .require(max)
        .require(reduceToMax)
        .map(data => reduceToMax(data))
        .reduce(data => reduceToMax(data))
        .then(data => console.log(`result: ${data}`))
        .then(() => console.timeEnd(timerName));
};

const NUM_ARRAYS = 8;
const ARRAY_LENGTH = 1024 * 1024;

const range = (start, len) => Array.from(Array(len).keys()).map(n => n + start);
const xs = range(0, NUM_ARRAYS).map((_, index) => range(index * ARRAY_LENGTH, ARRAY_LENGTH)).reverse();

doIt(xs, 1);
// doIt(xs, 2);
// doIt(xs, 4);
// doIt(xs, 8);
