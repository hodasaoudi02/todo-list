function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;

        // Legg til "Slett"-knapp
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Slett";
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = ""; // Tøm input-feltet
    }
}
