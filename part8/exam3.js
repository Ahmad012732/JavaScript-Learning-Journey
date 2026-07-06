class Student {
    #scores = [];
    constructor(name, regNo, department, level, phone, email, score) {
        this.name = name;
        this.regNo = regNo;
        this.department = department;
        this.level = level;
        this.phone = phone;
        this.email = email;
        this.#scores = [];
    }

    addScore(score){
      if (score > 0) {
        console.log("Score added");
        
        this.#scores.push(score)
      }

    }
}