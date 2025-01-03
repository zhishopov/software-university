const loadBtn = document.getElementById("btnLoad");
const phonebookList = document.getElementById("phonebook");
const createBtn = document.getElementById("btnCreate");
const url = "http://localhost:3030/jsonstore/phonebook";

function attachEvents() {
  loadBtn.addEventListener("click", getPhonebookEntries);
  createBtn.addEventListener("click", postData);
}

async function postData() {
  let person = document.getElementById("person");
  let phone = document.getElementById("phone");

  const info = {
    person: person.value,
    phone: phone.value,
  };

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
  } catch (error) {
    throw new Error(error.message);
  }

  person.value = "";
  phone.value = "";
  getPhonebookEntries();
}

async function getPhonebookEntries() {
  try {
    const response = await fetch(url);

    if (response.ok == false) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const data = await response.json();

    phonebookList.replaceChildren();
    Object.values(data).forEach((entry) => {
      console.log(entry);
      const listItem = document.createElement("li");
      const deleteBtn = document.createElement("button");

      Object.keys(data).forEach(() => {
        deleteBtn.dataset.key = entry._id;
      });

      deleteBtn.textContent = "[Delete]";
      listItem.textContent = `${entry.person}: ${entry.phone}`;

      listItem.appendChild(deleteBtn);
      phonebookList.appendChild(listItem);

      deleteBtn.addEventListener("click", deleteEntry);
    });
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteEntry(event) {
  const deleteBtn = event.target;
  const key = deleteBtn.dataset.key;
  const url = `http://localhost:3030/jsonstore/phonebook/${key}`;

  try {
    const request = await fetch(url, {
      method: "delete",
    });

    if (request.ok == false) {
      const error = await request.json();
      throw new Error(error.message);
    }
    deleteBtn.parentElement.remove();
  } catch (error) {
    throw new Error(error.message);
  }
}

attachEvents();
