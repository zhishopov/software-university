function calc() {
  const numOne = Number(document.getElementById("num1").value);
  const numTwo = Number(document.getElementById("num2").value);
  const sum = document.getElementById("sum");

  const result = numOne + numTwo;
  sum.value = result;
}
