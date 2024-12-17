function extractText() {
  const list = document.getElementById("items");
  const textarea = document.getElementById("result");
  const items = Array.from(list.children);

  const itemsText = items.map((li) => li.textContent).join("\n");
  textarea.value = itemsText;
}
