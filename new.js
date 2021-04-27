const formElement = document.querySelector(".form");

formElement.onsubmit = function (event) {
  event.preventDefault();

  const textInputElement = document.querySelector(".formInput");
  const checkedDateInput = document.querySelector(
    ".radioContainer__input:checked"
  );

  console.log(textInputElement.value, checkedDateInput.value);
};
