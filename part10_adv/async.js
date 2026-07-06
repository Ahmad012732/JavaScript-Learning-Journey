class BankAccount {
    #balance;
    #pin;
    constructor(owner,accountNumber,balance,pin) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.#balance = balance;
        this.#pin = pin;
    }

    deposit(amount){
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }

        if (amount <= 50) {
            console.log("Minimum deposit is 100");
            return;
        }
        this.#balance  += amount 
        console.log(`You deposited: ${amount}`);
        console.log(`Your new balance: ${this.#balance}`);
    }

    withdraw(amount){
        if (typeof amount !== "number" || amount <= 0) {
             console.log("Invalid withdraw amount");
             return;
        }

        if (amount > this.#balance) {
            console.log("Insufficient balance");
            return;
        }

        if (amount <= 50) {
            console.log("Minimum withdraw is 100");
            return;
        }
        this.#balance -= amount;
        console.log(`You withdrew: ${amount}`);
        console.log(`Remaining balance: ${this.#balance}`);
    }

    checkBalance(pin){
        if (pin !== this.#pin) {
            console.log("Wrong pin");
            return;
        }
        console.log(`Your current balance: ${this.#balance}`);
    }

    get balance(){
        return this.#balance
    }

    set balance(value){
        if (value > 0) {
            this.#balance = value;
        }
    }
}
const acc = new BankAccount("Ahmad Muhammad Tijjani", "8085417745", 20000, 2026);
const inna = new BankAccount("Aisha Muhammad Ahmad", "70668614266", 540000, 1980)

function fetchDeposit(){
    return new Promise((resolve) => {
        console.log("please wait...");
        setTimeout(() => {
            console.log("Successful");
            
        }, 3000);

        setTimeout(() => {
            acc.deposit(25000);
            resolve();
        }, 4000);
    })
}

function fetchWithdraw(){
    return new Promise((resolve) => {
        setTimeout(() => {
             console.log("please wait...");
        }, 5000);
        setTimeout(() => {
            acc.withdraw(4000);
            resolve();
        }, 6000);
    })
}

async function fetchBankAccount() {

    try {

         const [fetchDepositAmount, fetchWithdrawAmount] = await Promise.all([
             fetchDeposit(),
             fetchWithdraw(),
         ])
    } catch (error) {
        console.log("Something went wrong", error);
        
    }
    
}
//fetchBankAccount()
//acc.checkBalance(2026)
//inna.withdraw(75)
//console.log(inna.balance)
// console.log(inna.balance = 7000)
// inna.checkBalance(1980)