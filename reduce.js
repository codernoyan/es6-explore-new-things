// .reduce (accumulatorFunction, initialValue)


const numbers = [1, 2, 3, 4, 5];

// accumulator function has two parameters

// const total = numbers.reduce((previous, current) => previous + current, 0)
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0)
console.log(total);