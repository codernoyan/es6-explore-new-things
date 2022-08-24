const numbers = [5, 45, 18, 9, 25, 1, 74, 66, 19, 15];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fives);
console.log(fivesAll);

const products = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 30000 },
    { id: 1, name: 'tablet', price: 23000 },
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);