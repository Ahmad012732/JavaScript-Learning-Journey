class BankAccount {

    #balance;
    #pin;
    constructor(owner, accountNumber, balance, pin) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.#balance = balance
        this.#pin = pin
    }

    deposit(amount){
     if (amount <= 0) {
        console.log("Input amount to deposit");
        return;
     }
     if (amount <= 10) {
        console.log("Amount should be above ₦10");
        return;
     }
     if (typeof amount !== "number") {
    console.log("Amount must be a number");
        return;
    }
     this.#balance += amount;
     console.log(`You deposited: ₦${amount}`);
     console.log(`Your new Balance: ₦${this.#balance}`);
    }

    withdraw(amount, enteredPin){
        if(enteredPin !== this.#pin){
            console.log("Input pin");
            return;
        }
        
      if (amount > this.#balance) {
        console.error("Insufficient Balance");
        return;
      }
      if (amount <= 0) {
        console.log("Input amount to withdraw");
       return;
      }
      this.#balance -= amount;
      console.log(`You withdrew: ₦${amount}`);
      console.log(`Remaining Balance: ₦${this.#balance}`);
      return;
    }

    checkBalance(pin){
            if (pin === this.#pin) {
                console.log(`Current Balance: ${this.#balance}`); 
                return;
            }
        }
  changePin(oldPin, newPin){
    if (oldPin === this.#pin || newPin.length === 4 ){
        console.log("Change pin successiful");
        return this.#pin === newPin;
        
    }
  }
    get balance(){
        return this.#balance;
    }

  accountInfo(){
    console.log(`Name: ${this.owner}`);
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Balance: ${this.#balance}`);
     
  }
    
}

const fatima = new BankAccount("Fatima", 345678432, 50000, 1234);
const acc = new BankAccount("Abdullahi Mohammed", 9058417745, 1000000, 2022);
const acc2  = new BankAccount("Ahmad", 8085417745, 200000, 2025 );
const account = new BankAccount("Khadija Ibrahim", 7960765432, 25000, 1122)
//console.log(account.balance);
//account.balance = 35000

//fatima.deposit(400, 345)
//fatima.withdraw(0)
//fatima.checkBalance(1234)
//account.checkBalance(1122)
//ccount.accountInfo()
//acc.deposit(500)
// acc.withdraw(580000000, 2026)
//acc.checkBalance(2026)
//console.log(acc.balance);
//account.changePin(1122, 4456)
//cc.withdraw(45000, 2022)



