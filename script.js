// For adding a task
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const taskTitle = document.getElementById('taskTitle').value;
    const taskStatus = document.getElementById('taskStatus').value;
    const taskDue = document.getElementById('taskDue').value;
    
    // Save task (here, we can use local storage or a backend API)
    const task = {
        title: taskTitle,
        status: taskStatus,
        due: taskDue
    };
    
    // Save to localStorage (for now, as a placeholder)
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // Redirect back to tasks page
    window.location.href = 'tasks.html';
});

// Load tasks on the task management page
window.addEventListener('load', function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-title">${task.title}</span> - 
            <span class="task-status">${task.status}</span> - 
            <span class="task-due">Due: ${task.due}</span>
        `;
        taskList.appendChild(li);
    });
});

