const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

// friends.forEach(friend => console.log(friend));
friends.forEach(friend => {

});

// friends.map(friend => console.log(friend));

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

const newProduct = products.forEach(product => product);
// console.log(newProduct);
const newProductMap = products.map(product => product);
console.log(newProductMap);