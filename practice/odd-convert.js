const numbers = [1, 3, 5, 7, 9];

const evenArray = []
// using for loop
for (const number of numbers) {
    const evenNumber = number + 1;
    evenArray.push(evenNumber);
}
console.log(evenArray);

// using map function
const evenNumbers = numbers.map(even => even + 1);
console.log(evenNumbers);