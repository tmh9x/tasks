const formElement = document.querySelector(".form");

formElement.onsubmit = function (event) {
  event.preventDefault();

  const textInputElement = document.querySelector(".formInput");
  const checkedDateInput = document.querySelector(
    ".radioContainer__input:checked"
  );

  if (!textInputElement.value) {
    alert("Please enter a task");
    return;
  }

  if (!checkedDateInput) {
    alert("Please select a date");
    return;
  }

  console.log(textInputElement.value, checkedDateInput.value);
};
