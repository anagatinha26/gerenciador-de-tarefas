// Referências aos elementos
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


// Função para adicionar tarefa
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;


  const taskItem = document.createElement('li');


  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;


  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.classList.add('delete');


  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });


  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteButton);


  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });


  taskList.appendChild(taskItem);
  taskInput.value = '';
}


// Adicionar evento ao botão
addTaskButton.addEventListener('click', addTask);