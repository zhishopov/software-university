const submitBtn = document.getElementById("submit");
const firstName = document.querySelector("input[name='firstName']");
const lastName = document.querySelector("input[name='lastName']");
const facultyNumber = document.querySelector("input[name='facultyNumber']");
const grade = document.querySelector("input[name='grade']");
const resultTableBody = document.querySelector("#results tbody");

const url = "http://localhost:3030/jsonstore/collections/students";

submitBtn.addEventListener("click", createStudent);

async function createStudent(event) {
  event.preventDefault();

  if (
    firstName.value == "" ||
    lastName.value == "" ||
    facultyNumber.value == "" ||
    grade.value == ""
  ) {
    return;
  }

  const studentInfo = {
    firstName: firstName.value,
    lastName: lastName.value,
    facultyNumber: facultyNumber.value,
    grade: Number(grade.value),
  };

  try {
    const request = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentInfo),
    });

    if (request.ok == false) {
      const error = await request.json();
      throw new Error(error.statusText);
    }
  } catch (error) {
    throw new Error(error.message);
  }
  getStudentInfo();
}

async function getStudentInfo() {
  try {
    const response = await fetch(url);

    if (response.ok == false) {
      const error = await response.json();
      throw new Error(error.statusText);
    }

    const data = await response.json();
    // console.log(data);

    resultTableBody.replaceChildren();
    Object.values(data).forEach((student) => {
      console.log(student);

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade}</td>
      `;
      resultTableBody.appendChild(row);
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
