// syntactic sugar
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
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

const solaiman = new Instructor('Solaiman', 'Dhaka');
console.log(solaiman);

const noyan = new Instructor('Noyan Dey', 'Chattogram');
console.log(noyan);
noyan.startSupportSession('11.00 am');