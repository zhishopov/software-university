function solve() {
  let departBtn = document.getElementById("depart");
  let arriveBtn = document.getElementById("arrive");
  const infoBox = document.querySelector(".info");

  let nextStopId = "depot";
  let stopName = "";

  async function depart() {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;
    try {
      const response = await fetch(url);

      if (response.ok == false) {
        const message = await response.json();
        throw message;
      }

      const data = await response.json();
      console.log(data);
      nextStopId = data.next;
      stopName = data.name;

      infoBox.textContent = `Next stop ${stopName}`;

      departBtn.disabled = true;
      arriveBtn.disabled = false;
    } catch (error) {
      infoBox.textContent = "Error";
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

  function arrive() {
    infoBox.textContent = `Arriving at ${stopName}`;

    arriveBtn.disabled = true;
    departBtn.disabled = false;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
