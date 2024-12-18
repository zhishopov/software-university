function addItem() {
  // Select the list with id "items"
  // Select the input field (take the value)
  // Create new <li> with textContent (input value)
  // Append the <li> to the list

  const list = document.getElementById("items");
  const input = document.getElementById("newItemText").value;

  const newItem = document.createElement("li");
  newItem.textContent = input;

  list.appendChild(newItem);
}
