let subjects = ["English", "Mathematics", "Socail Studies"];
let todaySub = subjects[0];
//console.log(todaySub);

let fruits = ["Mango", "Orange", "Pineapple", "Avacado"]
let fruit = fruits[2]
//console.log(fruit);

let states = ["Abuja", "yola", "Borno","Lagos"]
states[1] = "Kano";
//console.log(states);

let vegetables =["tomatoes","Onion", "Pepper"];
vegetables.push("Hot pepper")
//console.log(vegetables);

let products = ["Bag", "Shoe", "Caps", "T-shirt", "Belt"];
let lastE = products.pop()
//console.log(lastE);

let days = ["Monday", "Tuesday", "Wenesday", "Thursday", "Friday"];
let softDays = days;
days.pop()
// console.log(days);
// console.log(softDays);

let months = ["january", "fibuary", "March", "April", "May"]
let hardcopy = [...months];
months.pop()
// console.log(months);
// console.log(hardcopy);

let east = ["Enugu","Lagos"];
let north = ["Kano","Katsina"]
let nigria = east.concat(north)
//console.log(nigria);

let cars = ["Toyota", "Mercedes", "Tesla", "Corolla"]
car = cars.length;
//console.log(car);

let cities = ["Abuja", "Lagos", "kano","Enugu"];
let city = cities.includes("Adamawa")
//console.log(city);



let tasks = ["prayer", "Dua","Qur'an recitation", "Walk to gym", "Breakfast","Study","Work"];
tasks.push("Currently Lerning JavaScript")
tasks.push("Hola I got it!!!!")
tasks.pop()
for (const task of tasks) {
    
    console.log(task);
}





