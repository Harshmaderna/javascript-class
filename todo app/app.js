let inputText = document.querySelector("#inputtext");
let button = document.querySelector(".addbtn");
let addText = document.querySelector(".ullist");
let errorMessage = document.querySelector(".ptag");

const addNote = () => {
  const inputTexts = inputText.value.trim();
  if (inputTexts !== "") {
    const li = document.createElement("li");
    const pi = document.createElement("button")
    pi.innerText = "l"
    li.appendChild(pi)
    console.log(pi)
    li.innerText = inputTexts;
    const edit = document.createElement("button");
    edit.innerText = "edit";
    li.appendChild(edit);
    edit.addEventListener("click", () => {
      inputText.value = li.firstChild.nodeValue;
      button.innerText = "update";
      li.innerText = "";
    });
    button.innerText = "add";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      if (confirm("are you sure want to delete this text")) {
        li.remove();
      }
    });
    addText.prepend(li);
    inputText.value = "";

    errorMessage.innerText = "";
  } else {
    errorMessage.innerText = "This field is required";
  }
};
button.addEventListener("click", addNote);

