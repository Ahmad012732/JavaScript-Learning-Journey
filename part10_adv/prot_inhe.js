function Person(name){
    this.name = name;


Person.prototype.greet = () => {
  
  console.log(`Hi, i am ${this.name}`);
    
 } 
}

// let newPerson = Person
// const ahmad = new newPerson("john");
// ahmad.greet()

