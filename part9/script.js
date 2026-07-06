let  darkMode = false; 
const button = document.getElementById("btn");
button.addEventListener('click', function (){
    let container = document.getElementById("container")
    let heading = document.getElementById("h1")

    if (darkMode === false) {
        heading.textContent = "Welcome Ahmad!"
        container.style.background = "black";
        heading.style.color ="white";
        heading.style.fontSize = "20px"
        button.textContent = "Light Mode"
        darkMode = true;
    } else {
        darkMode = false;
        heading.textContent = "Welcome Back Ahmad!"
        container.style.background = "white";
        heading.style.color ="black";
        heading.style.fontSize = "20px"
        button.textContent = "Dark Mode"
      
    }
        
})  
