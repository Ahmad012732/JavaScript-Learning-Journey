class Person {
   
    login(){
        console.log("logged in");
        
    }

    logout(){
        console.log("logged out");
        
    }
}

class Student extends Person {
    constructor(name, regNo, department, level) {

        super();
        this.name = name;
        this.regNo = regNo;
        this.Department = department;
        this.level = level;
    }
    login(){
        console.log("STUDENT DASHBOARD");
        
    }
    checkResults(){}
    registerCourse(){}
    score(){}
    
    logout(){
       console.log(`${this.name} logged out`);
       
    }
}

class Admin extends Person {
    constructor(name, email, password) {

        super()
        this.name = name;
        this.email = email;
        this.password = password;
    }
  login(){
    console.log("ADMIN DASHBOARD");
    
  }
  calculateGPA(){}
  addNewStudent(){}

  logout(){
       console.log(`${this.name} logged out`);
       
    }
}
const i = new Person();
i.login()