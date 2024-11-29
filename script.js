const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");

function add() {
  const task = input.value.trim();

  if (task !== "") {
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = function () {
      if (editBtn.textContent === "Edit") {
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = taskText.textContent;

        li.insertBefore(editInput, taskText);
        li.removeChild(taskText);

        editBtn.textContent = "Save";
      } else {
        const newTask = li.querySelector("input").value.trim();
        if (newTask !== "") {
          taskText.textContent = newTask;

          li.insertBefore(taskText, li.querySelector("input"));
          li.removeChild(li.querySelector("input"));

          editBtn.textContent = "Edit";
        } else {
          alert("Task cannot be empty.");
        }
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    li.className = "list";
    listContainer.appendChild(li);

    input.value = "";
  } else {
    alert("Please enter a valid task.");
  }
}
