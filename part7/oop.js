class BankAccount {
    constructor(owner, accountNo, balance,) {
        this.owner = owner;
        this.balance = balance;
        this.accountNo = accountNo;
        
        
    }
  deposit(amount){
   this.balance += amount;
   console.log(`You deposited: ₦${amount}`);
   console.log(`Your New Balance: ₦${this.balance}`);
  }

  withdraw(amount){
    if (amount > this.balance) {
        console.log("Insufficient Balance");
    }else{

        this.balance -= amount;
        console.log(`You withdrew: ₦${amount}`);
        console.log(`Remainig Balance: ₦${this.balance}`);
    }

  }
 checkBalance(){
    return console.log(`Your Balance: ₦${this.balance}`);
    
 }
}

const Ahmad = new BankAccount("Ahmad", 12345 ,35000);
const Ali = new BankAccount("Ali", 34567, 50000);
const maryam = new BankAccount("Maryam", 345567, 450000);
const Alice = new BankAccount("Alice", 3456547, 180000);

//Alice.checkBalance()