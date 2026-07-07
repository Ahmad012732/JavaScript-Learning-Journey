const button = document.getElementById("btn");
button.addEventListener('click', function (){
   const container = document.getElementById("container")
   const Task =  document.getElementById("Task")
   const paragraph =  document.createElement("p");
   paragraph.textContent = Task.value;
   container.appendChild(paragraph);
})