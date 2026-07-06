class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    login(){
        console.log(`${this.name} logged in`);
       
    }

    logout(){
        console.log(`${this.name} logged out`);
    }
}
 const ahmad = new Person("Staff", 20, "ST002");
 ahmad.login()
 console.log(ahmad);
 ahmad.logout()



class Student extends Person {
    constructor(name, age, regNo, DOB) {

        super(name, age)
          this.regNo = regNo;
          this.DOB = DOB;
        
    }
}
  const Musa = new Student("Student", 18, "ST0001", "20 AUG 2002");
  Musa.login()
  console.log(Musa);
  Musa.logout()
   