let  cityPopulation = {
    Lagos: 9000000,
    Kano: 8900000,
    Kaduna: 5000000,
    "Adamawa": 3000000,
}
let morePopulation = {}

for (const city in cityPopulation) {

    if (cityPopulation[city] < 9000000) {
        break;
    }
 morePopulation[city] = cityPopulation[city]
 
 //console.log(morePopulation[city]);
}
