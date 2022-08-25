const numbers = [1, 9, 17, 22];

// using for loop
let sum = 0;
for (const number of numbers) {
    sum += number;
}
console.log(sum);

// using reduce function
const newSum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(newSum);