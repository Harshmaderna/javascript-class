let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");
let inputes = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    if (value === "Ac") {
      input.value = "";
      inputes = "";
    } else if (value === "=") {
      try {
        input.value = eval(inputes);
        inputes = input.value;
      } catch (error) {
        input.value = "error";
        inputes = "";
      }
    } else{
        inputes += value;
        input.value = inputes;
    }
  });
});

