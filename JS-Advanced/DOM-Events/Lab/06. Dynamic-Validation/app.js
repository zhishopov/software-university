function validate() {
  const input = document.getElementById("email");
  const match = /^[a-z]+@[a-z]+.[a-z]+$/;

  input.addEventListener("change", () => {
    input.className = "";
    if (!match.test(input.value)) {
      input.className = "error";
    }
  });
}
