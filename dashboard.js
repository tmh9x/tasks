function createTaskElement(taskName) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkboxContainer__input";

  span.className = "checkboxContainer__task";
  span.innerText = taskName;

  label.append(input, span);
  return label;
}

function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

const taskList = parseJSONFromLocalStorage("taskList", []);

const newTaskList = taskList.map((task) => createTaskElement(task.name));
//   .filter((task) => task.date === "today");

const tasksToday = taskList.filter((task) => task.date === "today");
// console.log(tasksToday);
const tasksTomorrow = taskList.filter((task) => task.date === "tomorrow");
// console.log(tasksTomorrow);
const tasksThisWeek = taskList.filter((task) => task.date === "thisWeek");
// console.log(tasksThisWeek);

const checkedDateInput = document.querySelector(
  ".radioContainer__input:checked"
);
if (checkedDateInput.value === "today") {
}
// const tasksToday = taskList.filter((task) => task.date === "today");
// console.log(tasksToday);

const tasksGroupElement = document.querySelector(".checkboxContainer");
tasksGroupElement.append(...newTaskList);
