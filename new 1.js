document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const taskStatus = document.getElementById('taskStatus').value;
    const taskDue = document.getElementById('taskDue').value;

    const taskList = document.querySelector('.dashboard ul');
    const newTask = document.createElement('li');
    newTask.classList.add('task-item');
    newTask.innerHTML = `
        <span class="task-title">${taskTitle}</span>
        <span class="task-status">${taskStatus}</span>
        <span class="task-due">Due: ${taskDue}</span>
    `;

    taskList.appendChild(newTask);

    // Clear the form after submission
    document.querySelector('form').reset();
});
