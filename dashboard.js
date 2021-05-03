const dateInputs = document.querySelectorAll(".radioContainer__input");
const tasksGroupElement = document.querySelector(".checkboxContainer");

function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function createTaskElement(task) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkboxContainer__input";
  input.onchange = function () {
    completeTask(task.name, input.checked);
  };

  span.className = "checkboxContainer__task";
  span.innerText = task.name;

  label.append(input, span);
  return label;
}

function completeTask(taskName, completed) {
  const taskList = parseJSONFromLocalStorage("taskList", []);
  const task = taskList.find(function (task) {
    return task.name === taskName;
  });
  task.completed = completed;
  stringifyJSONToLocalStorage("taskList", taskList);
}

// Get taskList from the local-browser-storage and converts it to an object
function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  // if no tasks in array creates an empty array as default
  if (json === null) {
    return defaultValue;
  }
  // else converts data from localStorage to an object
  const data = JSON.parse(json);
  return data;
}

// Get Array with taskList objects from local Storage
const taskList = parseJSONFromLocalStorage("taskList", []);

// Create TaskList filtered by date, mapping only the taskNames
function createTaskList(selectedDate) {
  const taskElements = taskList
    .filter((task) => task.date === selectedDate)
    .map((task) => createTaskElement(task));
  tasksGroupElement.innerHTML = "";
  tasksGroupElement.append(...taskElements);
}

///////////////////////////////////////////////////////
// Show no filtered taskList as default
const taskElements = taskList.map(function (task) {
  return createTaskElement(task);
});
tasksGroupElement.append(...taskElements);
//////////////////////////////////////////////////////

// Creates a filtered taskList by changing the DateSelection (radiobutton)
dateInputs.forEach((dateInput) => {
  dateInput.onchange = () => createTaskList(dateInput.value);
});

// // FUNC COMPLETE ////////////////////////////////
// function completed(e) {
//   const item = e.target;
//   if (item.classList[0] === "checkbox__text") {
//     item.classList.toggle("completed");
//     console.log(item);
//   }
// }

// const newTaskList = taskList.map((task) => createTaskElement(task.name));
// //   .filter((task) => task.date === "today");

// const tasksToday = taskList.filter((task) => task.date === "today");
// // console.log(tasksToday);
// const tasksTomorrow = taskList.filter((task) => task.date === "tomorrow");
// // console.log(tasksTomorrow);
// const tasksThisWeek = taskList.filter((task) => task.date === "thisWeek");
// // console.log(tasksThisWeek);

// const checkedDateInput = document.querySelector(
//   ".radioContainer__input:checked"
// );
// if (checkedDateInput.value === "today") {
// }
// // const tasksToday = taskList.filter((task) => task.date === "today");
// // console.log(tasksToday);

// const tasksGroupElement = document.querySelector(".checkboxContainer");
// tasksGroupElement.append(...newTaskList);
