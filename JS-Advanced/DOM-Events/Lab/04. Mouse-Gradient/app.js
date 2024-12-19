function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  const result = document.getElementById("result");

  gradient.addEventListener("mousemove", onMouseMove);

  function onMouseMove(event) {
    let x = event.offsetX;
    let percent = Math.floor((x / 300) * 100);
    result.textContent = `${percent}%`;
  }
}
