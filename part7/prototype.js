function student(name) {
    this.name = name;
}


student.prototype.study = function (){
   // console.log("Studying...");
    
}
let ahmad = new student("Ahmad");
ahmad.study();
let maryam = new student("Maryam")
maryam.study()

function BankAccount(owner,accountNumber,balance) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount){
  this.balance += amount;

  console.log(`You deposited: ${amount}`);
  console.log(`Your New Balance: ${this.balance}`);
}

BankAccount.prototype.withdraw = function (amount){
    
    if (amount > this.balance) {
        throw new Error("Insufficient Balance");
        
    }
    
    this.balance -= amount;
    console.log(`You withdrew: ${amount}`);
    console.log(`Remainig Balance: ${this.balance}`);
}

BankAccount.prototype.checkBalance = function (){
    console.log(`Your Balance: ${this.balance}`);
    
}
const Sani = new BankAccount("Sani", 12345, 3000);
// Sani.deposit(5500)
// Sani.withdraw(250)
// Sani.checkBalance()

const Ahmad = new BankAccount("Ahmad", 23456, 2500)
//Ahmad.withdraw(1000)