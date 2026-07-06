let count = 0;
const addition = document.getElementById("add");
const counter = document.getElementById("count")
const subtraction = document.getElementById("sub")
const reset = document.getElementById("reset")

addition.addEventListener('click', function (){
    count++;
    counter.textContent = count;
})

subtraction.addEventListener('click', function (){
    count--;
    counter.textContent = count;
})

reset.addEventListener('click', function (){
    count = 0;
counter.textContent = count;

})


