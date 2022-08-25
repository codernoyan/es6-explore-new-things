class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thanks for your feedback.`);
    }
}

class Instructor extends TeamMember {
    designation = 'Web Course Instructor';
    team = 'Web Team';
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`${this.name} start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`${this.name} Please create quiz for module ${module}`)
    }
    age(year) {
        const date = new Date();
        const currentYear = date.getFullYear();
        console.log(`${this.name} you are ${currentYear - year} years's old`);
    }
}

class Developer extends TeamMember {
    designation = 'Web Course Instructor';
    team = 'Web Team';
    tech;
    constructor(name, location, tech) {
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`);
    }
    release(version) {
        console.log(`Please release the version ${version}`)
    }
    age(year) {
        const date = new Date();
        const currentYear = date.getFullYear();
        console.log(`you are ${currentYear - year} years's old`);
    }
}

class JobPlacement extends TeamMember {
    designation = 'Job Placement Commandoes';
    team = 'Job Placement';
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    provideResume(time) {
        console.log(`${this.name} start the support session at ${time}`);
    }
    prepareStudent(module) {
        console.log(`${this.name} Please create quiz for module ${module}`)
    }
    age(year) {
        const date = new Date();
        const currentYear = date.getFullYear();
        console.log(`${this.name} you are ${currentYear - year} years's old`);
    }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement('Bipasha', 'Kolkata', 'India');
console.log(bipasha);

const { name: developerName, team, region, location } = bipasha;

console.log(`Hello ${developerName}, I know you are live in ${location}. Currently working on ${team} at ${region} region`);