document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && taskInput.value.trim() !== "") {
      addTask(taskInput.value.trim());
      taskInput.value = "";
    }
  });

  function addTask(taskName) {
    const taskItem = document.createElement("div");
    taskItem.className = "task";
    const taskText = document.createElement("span");
    taskText.innerText = taskName;
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", function () {
      taskItem.remove();
    });
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", function () {
      taskText.style.display = "none";
      editInput.style.display = "block";
      editInput.value = taskText.innerText;
    });
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "editable";
    const saveButton = document.createElement("button");
    saveButton.innerText = "Save";
    saveButton.addEventListener("click", function () {
      taskText.innerText = editInput.value;
      taskText.style.display = "inline";
      editInput.style.display = "none";
    });
    editInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        saveButton.click();
      }
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(removeButton);
    taskItem.appendChild(editButton);
    taskItem.appendChild(editInput);
    taskItem.appendChild(saveButton);
    taskList.appendChild(taskItem);

    taskText.addEventListener("click", function () {
      taskText.classList.toggle("completed");
    });
  }
});
