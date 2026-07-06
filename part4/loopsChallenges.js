// let countdouwn = [];
// let i = 5;

// while (i > 0) {
//     countdouwn.push(i)
//     i--;
// }
//console.log(countdouwn);

// let attemps = 0

// while (attemps < 3) {
//     console.log("keep trying...");
//     attemps++
// }
//console.log("Maximum attempts reached!");

// let userName = "Ahmad";
// let password = 1234

// while (userName === "Ahmad" && password === 1234 ) {
//     console.log("Checking please wait...");
//     break;
    
// }
// console.log("Login Successiful");

// let num = 0

// while (num <= 6) {
//     console.log("Working");
//     num++
// }
// console.log("You got it!");

// let balance = 3000

// do {
//     console.log("please wait..");
//     balance++
// } while (balance < 1000);
// console.log("insufficient, Fund your Account!");

// let marriage = 2

// do {
//     console.log("Come forword let start");
//     marriage++
// } while (marriage < 1);
// console.log("Please we Can't make this nikkah.");

// 

// let Tasks = [
//     "Add Task",
//     "View Task",
//     "Delete Task"
// ]

// let i = 0;

// while (i < Tasks.length) {
//     console.log(Tasks[i]);
//     i++
// }

// let balance = 3000
// while (balance > 1000) {
//     console.log("Available balance");
//     balance++
//     break;
    
// }



// let count = 1

// while (count <= 10) {
    
//     console.log(count);
//     count++
// }

// Always remember you have 3 stages 1 is Innitializaion, 2 is Conditon, 3 is Increment Or Decrement.

let i = 1;                                    // innitialization
 while (i <= 5) {                            // condion
    //console.log("Hello Ahmad", i);           // output
    i++;                                     //increment
 }

 let j = 5;                          //innitialization

 while (j >= 0) {                    // condition
    //console.log("Hello",j);          // output
    j--;                             // decrement
 }

 let password = 123

 while (password === 123) {
    //console.log("Login Successiful!");
    break;       // why we used break point because the condion is true which means it will continue running
                 // infinite that is why we used break to end the execution.
 }

 let k = 1;
 while (k <= 10) {
    if(k === 6)break;
   // console.log("Hola",k);
    k++
 }

//  let attempt = 3

//  while (attempt  > 0) {
//    // console.log(`attemptLeft:` ,attempt);
//     attempt--
//  }

 let n = 10;

  while (n > 0) {
    //console.log(`count`, n);
    n = n -2;
    
  }

  let x = 2
  while (x <= 20) {
    //console.log(x);
    x += 2
    
  }
  let MultipleNumbers = []
  let numbers = [2, 4, 6]

  for (let i= 0; i < numbers.length; i++) {
   
   takeNumber = numbers[i] * 3

   MultipleNumbers.push(takeNumber)
   
  }
  //console.log(MultipleNumbers);
  
  let Tasks = ["prayer", "Dua", "Qur'an recitation", "Walk to gym", "Breakfast","Study","Work"];
  let tasks = []

  for (let i = 0; i < Tasks.length; i++) {
   const myTasks = Tasks[i];
   tasks.push(myTasks)
  }
  //console.log(tasks);

let days =["Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday", "Sunday"]
let workingDays = [];

for(let i = 0; i < days.length; i++){

   if (days[i] === "Saturday") break;

   workingDays.push(days[i])
}
//console.log(`Working Days: ${workingDays}`);
let Days = [ "Friday", "Saturday", "Sunday"];
let weekend = []

for(let d = 0; d < Days.length; d++){

   if (Days[d] === "Friday") continue;

   weekend.push(Days[d])
}
//console.log(`Weekend: ${weekend}`);

let no = [1, 2, 3, 4, 5,]
let no4 = []
for (const Num of no) {
   if (Num === 4) {
      break;
   }
   no4.push(Num)
}
//console.log(no4);

// let attempt = 3

// while (attempt > 0) {
//     console.log(`attempts remain: ${attempt}`);
    
//     attempt--;
// }

let f = 3;

do {
   console.log(x);
   f--;
   
} while (f > 0);
