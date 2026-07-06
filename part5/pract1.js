 let password = 134;
 let attempts = 0

 while (attempts > 0) {  // true
    
    if (password === 1234) {
         console.log("Login Successiful");
         break;
     } 
    if (password !== 1234) {
        console.log(`Attempt Left: ${attempts}`);
        attempts--;
        break;
    }
    
       if (attempts === 0) {
          console.log("Account Locked");
          break;
       }
 
}
 
// let ATM = [
//     "Check Balance",
//     "Deposit",
//     "Widthdraw",
//     "Exit",
// ]
// let balance = 5000;
// let choice = 3;
// let amount = 150;

// do {
//     console.log(ATM);

//     if (choice === 1) {
//         console.log(`Your balance: ₦${balance}`);
//         break;
//     }

//     if (choice === 2) {
//         balance += amount;
//         console.log(`You deposited: ₦${amount}`);
//         console.log(`Your new balance: ₦${balance}`);
//         break;
//     }

//     if (choice === 3) {
//        if (amount <= balance) {
//         balance -= amount;
//         console.log(`You widthdrew: ₦${amount}`);
//         console.log(`Your Remaining Balance: ₦${balance}`);
        
//        }else{
//         console.log(`Insufficient Balance`);
        
//        }
//         break;
//     }

//     if (choice === 4) {
//         console.log(`Thank you for using our ATM`);
        
//     }else{

//         console.log("Invalid Chioce");
//         break;
//     }
    
// } while (choice !== 4);