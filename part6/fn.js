function greet(name) {
    //console.log(`Hello ${name}!`);
    
}
greet("Ahmad");
greet("Yosuf");
greet("John")

function add(a ,b) {
  return 2 + 3;   
}
//console.log(add());

function Engine(grinding) {
    function processing() {
        return `Granding:; ${grinding}`
    }
    return processing("tomatoes")
}
//console.log(processing());

let students = [

    {name: "Ahmad", score: 80},
    {name: "Yosuf" , score: 70},
    {name: "Fatima", score: 74},
    {name: "Maryam", score: 66},
    {name: "Abdullahi", score: 55},
    {name: "John", score: 35},
    {name: "Zainab", score: 49},
]
let passedStudent = students.filter(students => students.score >= 50);
//console.log(passedStudent);

let products = [
    {Product: "Laptop", price: 170000},
    {Product: "Mouse", price: 10000},
    {Product: "Flash Drive", price: 5000},
    {Product: "Wireless Keyboard", price: 25000},
]
let newPrice  = products.map(products => products.price + 2000)
// console.log(newPrice);
// console.log(products);

let Worker = [
    {
        name: "Ahmad",
        age: 22,
        employer: true,
    },
    {
        name: "Fatima",
        age: 20,
        employer: true,
    },
    {
        name: "Tahir",
        age: 25,
        employer: true,
    },
    {
        name: "Maryam",
        age: 21,
        cleaner: true,
    }
]

let active = Worker.find(Worker => Worker.name === "Ahmad")
//console.log(active);

