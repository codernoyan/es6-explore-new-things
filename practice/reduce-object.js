const peoples = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 },
];

// const sumOfAges = people.reduce(elementObj => elementObj.age)

const agesOfPeople = peoples.map(people => people.age);
console.log(agesOfPeople);

const sumOfAges = agesOfPeople.reduce((previous, current) => previous + current, 0);
console.log(sumOfAges);

// using for loop
let sumOfAgesNew = 0;
for (const people of peoples) {
    const peopleAge = people.age;
    sumOfAgesNew += peopleAge;
}
console.log(sumOfAgesNew);