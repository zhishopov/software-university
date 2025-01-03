const submitBtn = document.getElementById("submit");
const refreshBtn = document.getElementById("refresh");
const textarea = document.getElementById("messages");
const url = "http://localhost:3030/jsonstore/messenger";

function attachEvents() {
  submitBtn.addEventListener("click", postData);
  refreshBtn.addEventListener("click", getData);
}

async function postData() {
  const author = document.querySelector("input[name='author']").value;
  const content = document.querySelector("input[name='content']").value;

  const info = { author, content };

  try {
    const request = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    });

    if (request.ok == false) {
      const error = await request.json();
      throw new Error(error.message);
    }
    const data = await request.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

async function getData() {
  textarea.value = "";
  try {
    const response = await fetch(url);

    if (response.ok == false) {
      const error = await requeresponsest.json();
      throw new Error(error.message);
    }

    const data = await response.json();

    const messages = Object.values(data);
    console.log(messages);
    messages.forEach((message) => {
      textarea.value += `${message.author}: ${message.content}\n`;
    });
    textarea.value = textarea.value.trim();
  } catch (error) {
    console.log(error.message);
  }
}

attachEvents();
