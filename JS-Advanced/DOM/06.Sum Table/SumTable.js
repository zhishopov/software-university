function sumTable() {
  const rows = Array.from(document.querySelectorAll("tr")).slice(1, -1);
  const result = document.getElementById("sum");
  let sum = 0;

  rows.forEach((row) => {
    let value = Number(row.lastElementChild.textContent);
    sum += value;
  });

  result.textContent = sum;
}
