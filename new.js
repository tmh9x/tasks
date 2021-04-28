const formElement = document.querySelector(".form");

function parseJSONFromLocalStorage(key) {
  const json = localStorage.getItem(key);
  const data = JSON.parse(json);
  return data;
}

function appendToArray(item, array) {
  return [...array, item];
}

function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

formElement.onsubmit = function (event) {
  // Prevent the default form submit behaivor (sending data to a server an reloading page)
  event.preventDefault();

  const textInputElement = document.querySelector(".formInput");
  const checkedDateInput = document.querySelector(
    ".radioContainer__input:checked"
  );

  if (!textInputElement.value) {
    alert("Text Input is empty!");
    return;
  }

  if (!checkedDateInput) {
    alert("Radio Button not checked!");
    return;
  }

  const task = {
    name: textInputElement.value,
    date: checkedDateInput.value,
  };

  const taskList = parseJSONFromLocalStorage("taskList");
  const newTaskList = appendToArray(task, taskList);
  stringifyJSONToLocalStorage("taskList", newTaskList);
};

////////////////////////////////////////////
// SAME RESULT WITHOUT CREATING FUNCTIONS //
////////////////////////////////////////////

// const formElement = document.querySelector(".form");

// formElement.onsubmit = function (event) {
//   event.preventDefault();

//   const textInputElement = document.querySelector(".formInput");
//   const checkedDateInput = document.querySelector(
//     ".radioContainer__input:checked"
//   );

//   if (!textInputElement.value) {
//     alert("Please enter a task");
//     return;
//   }

//   if (!checkedDateInput) {
//     alert("Please select a date");
//     return;
//   }

//   const task = {
//     name: textInputElement.value,
//     date: checkedDateInput.value,
//   };

//   const taskList = JSON.parse(localStorage.getItem("taskList"));

//   taskList.push(task);
//   console.log(taskList);

//   localStorage.setItem("taskList", JSON.stringify(taskList));

// };
