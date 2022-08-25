class Instructor{
    name;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`${this.name} vai start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`${this.name} vai Please create quiz for module ${module}`)
    }
    age(year) {
        const date = new Date();
        const currentYear = date.getFullYear();
        console.log(`${this.name} vai you are ${currentYear - year} years's old`);
    }
}

const aamir = new Instructor('Aamir', 'Mumbai');
console.log(aamir);
aamir.startSupportSession('9.00 pm');
aamir.createQuiz(30);
aamir.age(1987);

const solaiman = new Instructor('Solaiman', 'Dhaka');
console.log(solaiman);