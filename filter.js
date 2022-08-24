const numbers = [5, 45, 18, 9, 25, 1, 74, 66, 19, 15];

const bigNums = numbers.filter(number => number > 20);

const tiny = numbers.filter(number => number < 10);

const even = numbers.filter(num => num % 2 === 0);

const odd = numbers.filter(n => n % 2 !== 0)

/* console.log(bigNums);
console.log(tiny);
console.log(even);
console.log(odd); */

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 100);
const expensive = products.filter(product => product.price < 40000);
console.log(expensive);