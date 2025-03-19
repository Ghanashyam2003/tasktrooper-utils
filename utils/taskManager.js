const tasks = [];

// Add Task
function addTask(title, dueDate = null, priority = 'Medium') {
  const task = {
    id: tasks.length + 1,
    title,
    dueDate,
    priority,
    completed: false,
  };
  tasks.push(task);
  console.log('Adding Task:', task);
}

// List Tasks
function listTasks() {
  console.log('All Tasks:', tasks);
}

// Mark Task as Complete
function markTaskComplete(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
    console.log('Mark Task Complete:', task);
  } else {
    console.log('Task not found.');
  }
}

// Edit Task
function editTask(id, updates) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    Object.assign(task, updates);
    console.log('Task Updated:', task);
  } else {
    console.log('Task not found.');
  }
}

// Delete Task
function deleteTask(id) {
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1);
    console.log('Deleted Task:', deletedTask);
  } else {
    console.log('Task not found.');
  }
}

module.exports = { addTask, listTasks, markTaskComplete, editTask, deleteTask };
