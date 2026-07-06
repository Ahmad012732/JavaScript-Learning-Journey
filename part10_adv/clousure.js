function count() {
    let count = 5
    return function (){
        count++;   // you leteraly use count += 1 it keep adding by one the with one we used now.
        return count;
    }
    
}

//et Count = count()
 //console.log(count());
// console.log(Count());
// console.log(Count());
// console.log(Count());

// Markdown
// the reason why use clousure is for privacy, encapsulation so you can hide the variable no one can access.
// it wiil be accessible by following the rule that apply.

function multiplyBy(x){
    return function (y){
       return x * y;
    }
}

let double = multiplyBy(2)
let triple = multiplyBy(3)
let once = multiplyBy(1)
// console.log(double(5)); // 10
// console.log(triple(5)); // 15
// console.log(once(5)); // 5

// function student(){
//     let total = 0
//     return function (score){

//         return  total += score;
//     }
// }

// let newS = student()
// console.log(newS(5));
