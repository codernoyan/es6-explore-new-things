const numbers = [33, 50, 79, 78, 90, 101, 30];

const divisibleBy10 = numbers.filter(number => number % 10 === 0);
console.log(divisibleBy10);

const divisibleBy10Find = numbers.find(number => number % 10 === 0);
console.log(divisibleBy10Find);