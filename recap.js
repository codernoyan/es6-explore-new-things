// arrow function with default parameters
const add = (num1 = 0, num2 = 0) => {
    const total = num1 + num2;
    return total;
}

const result = add(10)
console.log(result);

const [a, b, ...c] = [45, 88, 78, 98, 36, 44];

console.log(a)
