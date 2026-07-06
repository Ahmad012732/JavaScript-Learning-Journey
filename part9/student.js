class Person {
    #password;
    constructor(name, id, email, password) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.#password = password;
    }

  get password(){
    return this.#password;
  }
    login(){
        console.log(`${this.name} logged in`);
        
    }

    logout(){
        console.log(`${this.name} logged out`);
        
    }
}



class Student extends Person {
   #score = [50, 60, 70, 80, 90, 100];
    constructor(name, regNo, id, email, password, department,score) {
            super(name, id, email, password);
            this.regNo = regNo;
            this.department = department;
            this.#score = [];
    }
    
        login(){
            console.log('STUDENT DASHBOARD');
            
        }

        addScore(newScore, score){
        if (typeof score === "number" || score === newScore) {
           console.log("Score added");
           return score;
        } else {
            console.log("Invalid score");
            
        }
    }

    calculateAverage(score){
        let total = 0
        this.#score.forEach(score => {
            total += score;
            return total / this.#score.length;
        });
    }
    calculateGrade(score){
     if(score >= 90) return "A"
     if(score >= 80) return "B"
     if(score >= 70) return "C"
     if(score >= 60) return "D"
     if(score >= 50) return "F"
    }

    get score(){
        return this.#score;
    }
    set score(value){
        if (value >= 100) {
            this.#score = value;
        }
    }
}
const student = new Student("Ahmad", "ST001","ABC2345", "Ahmaad@gmail.com", 2026, "Computer Science", 70);
student.login()
console.log(student);
