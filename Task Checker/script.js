function checkTasks() {
  // Array of checkbox IDs
  let tasks = ["task1", "task2", "task3", "task4"];
  let completed = 0;

  // Loop to check each checkbox
  for (let i = 0; i < tasks.length; i++) {
    let checkbox = document.getElementById(tasks[i]);
    if (checkbox.checked) {
      completed++;
    }
  }

  // If-else condition to show message
  let message = "";
  if (completed === tasks.length) {
    message = "Great job! All tasks completed.";
  } else {
    message = "Procrastinator, you have " + (tasks.length - completed) + " tasks left.";
  }

  // Show the message on screen
  document.getElementById("output").innerText = message;
}
