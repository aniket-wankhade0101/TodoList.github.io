 // selecting elements

 const taskInput = document.getElementById('taskInput');
 const taskList = document.getElementById('taskList');

 // function to add a new list
 function addTask() {
     const taskText = taskInput.value.trim();
     if (taskText !== '') {
         //create a new list item

         const newTask = document.createElement('li');
         newTask.innerHTML = ` <span>${taskText}</span>
         <button class="btn btn-outline-success " onclick="completeTask(this)"  >Complete</button>
         <button class="btn btn-outline-danger " onclick="deleteTask(this)" >Delete</button> `;

         //Append the new task to the list

         taskList.appendChild(newTask);

         //clear the input field

         taskInput.value = '';
     }

 }

 // function to make a taask as completed

 function completeTask(button) {
     const taskItem = button.parentNode;
     taskItem.classList.toggle('completed');
     window.alert("To-Do list already updated")

 }

 //function to delete a task

 function deleteTask(button) {
     const taskItem = button.parentNode;

     taskList.removeChild(taskItem);
 }
