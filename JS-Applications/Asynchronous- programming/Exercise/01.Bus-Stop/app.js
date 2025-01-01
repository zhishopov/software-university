async function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const busesList = document.getElementById("buses");

  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
  busesList.replaceChildren();
  try {
    const response = await fetch(url);

    if (response.ok == false) {
      const errorMessage = await response.json();
      throw errorMessage;
    }

    const data = await response.json();
    stopName.textContent = data.name;

    for (let [busId, time] of Object.entries(data.buses)) {
      const listItem = document.createElement("li");
      listItem.textContent = `Bus ${busId} arrives in ${time} minutes`;
      busesList.appendChild(listItem);
    }
  } catch (error) {
    stopName.textContent = "Error";
  }
}
