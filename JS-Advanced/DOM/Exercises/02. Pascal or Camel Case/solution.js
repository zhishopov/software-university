function solve() {
  const text = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  const divResult = document.getElementById('result');
  const words = text.toLowerCase().split(" ");
  let result = "";

  if (convention === "Camel Case") {
    result = words[0]; // First word remains lowercase
    for (let i = 1; i < words.length; i++) {
      if (words[i]) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }
  } else if (convention === "Pascal Case") {
    for (let word of words) {
      if (word) {
        result += word.charAt(0).toUpperCase() + word.slice(1);
      }
    }
  } else {
    result = "Error!";
  }

  divResult.textContent = result;
}
