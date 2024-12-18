function addItem() {
  const list = document.getElementById("items");
  const input = document.getElementById("newItemText").value;

  const newItem = document.createElement("li");
  newItem.textContent = input;

  const deleteBtn = document.createElement("a");
  deleteBtn.href = "#";
  deleteBtn.textContent = "[Delete]";

  deleteBtn.addEventListener("click", removeItem);

  function removeItem() {
    newItem.remove();
  }
  newItem.appendChild(deleteBtn);

  list.appendChild(newItem);
}
