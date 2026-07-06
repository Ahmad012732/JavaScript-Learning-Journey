class Employer {
    constructor(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }
    profile(){
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
        console.log(`Department: ${this.department}`);
          
    }
}

const emp1 = new Employer("John Doe", 45, "Management");
const emp2 = new Employer("Vanessa Joseph", 20, "Secatery Manager");
//emp1.profile()
//emp2.profile()

class Head extends Employer {
    constructor(name, age, department, founder) {
        super(name, age, department)
        this.founder = founder;
    }

}
 const ceo = new Head("Ahmad Muhammad Tijjani", 25, "Management", "CEO");
 ceo.profile()
 console.log(ceo);
 