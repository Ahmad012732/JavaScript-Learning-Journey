document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("To-do-input");
const taskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("todo-list");

tasks = JSON.parse(localStorage.getItem('tasks')) ||[]
tasks.forEach((task) => taskDisplay(task));

taskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim()
    if (taskText === "")return;

    const newTask = {
     id: Date.now(),
     text: taskText,
     completed: false,
    }
    tasks.push(newTask)
    saveTasks()
    taskDisplay(newTask)
    todoInput.value = "";
    console.log(tasks);
    
})

function taskDisplay (task){
  const li =  document.createElement("li");
  li.setAttribute('data-id', task.id);
  if(task.completed) li.classList.add("completed")
   li.innerHTML = `
  <span> ${task.text}</span>
   <button>delete</button>
   `;

  li.addEventListener('click', (e) => {
     if(e.target.tagName === "BUTTON")return;
     task.completed = !task.completed
     li.classList.toggle("completed")
     saveTasks()
  })
  li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent toggle from firing
      tasks = tasks.filter((t) => t.id === task.id);
      li.remove();
      saveTasks();
    });

    taskList.appendChild(li);
}

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
})