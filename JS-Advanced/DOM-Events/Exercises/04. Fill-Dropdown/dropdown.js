function addItem() {
  const menu = document.getElementById("menu");
  const inputText = document.getElementById("newItemText");
  const valueText = document.getElementById("newItemValue");

  const newOption = document.createElement("option");
  newOption.textContent = inputText.value;
  newOption.value = valueText.value;
  menu.appendChild(newOption);

  inputText.value = "";
  valueText.value = "";
}
