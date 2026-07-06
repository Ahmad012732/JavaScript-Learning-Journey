function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let Toyota = new car("Toyota", "Camry", 2018)
//console.log(Toyota);
let Honda = new car("Matsubishi", "Honda", 2013)
//console.log(Honda);
let BMW = new car("Mercedes", "BMW", 2020);
//console.log(BMW);
let Tesla = new car("Tesla","Tesla", 2025);
//console.log(Tesla);
    

function person(name, age) {
    this.name = name;
    this.age = age;
}

let Ahmad = new person("Ahmad", 22)
//console.log(Ahmad);
let Fatima = new person("Fatima", 20)
//console.log(Fatima);
let maryam = new person("Maryam", 18)
//console.log(maryam);
function students(Fname, surName, regNO) {
    this.Fname = Fname;
    this.surName = surName;
    this.regNO = regNO;
}
let student5 = new students("Ahmad", "Muhammad Tijjani", "ST/CS/ND/23/001");
//console.log(student1);
let student2 = new students("Musa", "Yusuf Sani", "ST/CS/ND/23/002");
//console.log(student2);
let student3 = new students("Aisha", "Babagana", "ST/CS/ND/23/003");
//console.log(student3);
let student4 = new students("Maryam", "Danjuma Tijjani", "ST/CS/ND/23/004");
//console.log(student4);




function withdraw(amount) {
    this.amount = amount;
    if (amount <= 2000) {
        //throw new Error("Insufficient Balance");
        
    }
}
let deduct = new withdraw(1999)
//console.log(deduct);

