function deleteByEmail() {
  const input = document.querySelector('input[name="email"]').value;
  const result = document.getElementById("result");
  const rows = Array.from(document.querySelectorAll("#customers tbody tr"));

  let deleted = false;

  for (let row of rows) {
    const column = row.children[1];

    if (column.textContent === input) {
      row.remove();
      deleted = true;
    }
  }
  if (deleted) {
    result.textContent = "Deleted.";
  } else {
    result.textContent = "Not found.";
  }
}
