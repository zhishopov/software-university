function encodeAndDecodeMessages() {
  const textAreaOne = document.getElementsByTagName("textarea")[0];
  const textAreaTwo = document.getElementsByTagName("textarea")[1];
  const encodeButton = document.getElementsByTagName("button")[0];
  const decodeButton = document.getElementsByTagName("button")[1];

  encodeButton.addEventListener("click", encodeMessage);
  decodeButton.addEventListener("click", decodeMessage);

  function encodeMessage() {
    const words = textAreaOne.value;
    const encoded = [];

    for (let i = 0; i < words.length; i++) {
      let letter = words[i];
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
      encoded.push(letter);
    }
    textAreaTwo.value = encoded.join("");
    textAreaOne.value = "";
  }

  function decodeMessage() {
    const words = textAreaTwo.value;
    const decoded = [];

    for (let i = 0; i < words.length; i++) {
      let letter = words[i];
      letter = String.fromCharCode(letter.charCodeAt(0) - 1);
      decoded.push(letter);
    }
    textAreaOne.value = decoded.join("");
    textAreaTwo.value = "";
  }
}
