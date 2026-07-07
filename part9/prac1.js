
const button = document.querySelector("#btn");
button.addEventListener('click', function (){
   const title = document.querySelector(".title");
    title.classList.toggle("active")
    button.textContent = "Dark mode"
})

