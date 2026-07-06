function makeTea(typeOfTea) {
    return `making: ${typeOfTea}`
}
let teaOder = makeTea("earl grey")
//console.log(teaOder);

function orderTea(teaType) {
    function confirmOder() {
        return `Order Confirmed for: ${teaType}`
    }
    return confirmOder()
}
let oreder = orderTea("Chai")
let order2 = orderTea("Masala Tea")
let order3 = orderTea("Green Tea")
let order4 = orderTea("Ahmad Tea")
let order5 = orderTea("Akhbar Tea")
// console.log(oreder);
// console.log(order2);
// console.log(order3);
// console.log(order4);
// console.log(order5);

 const calculateTotal = (price, quantity) => {
     return 1499 * 200;
 }
 let totalCost = calculateTotal()
 //console.log(totalCost);

 function processOderTea() {
     function order(makeTea) {
         return` ${makeTea}`
     }
    return order("Akhbar Tea")
 }

 let tea = processOderTea();
   //console.log(tea);

function createTeaMaker(){
    return function (teaType) {
        return`making ${teaType}`
    }
}
let teaMaker = createTeaMaker()
let teas = teaMaker("green tea")
let tea2 = teaMaker("masala tea")
let tea3 = teaMaker("earl grey tea")
//console.log(teas);
