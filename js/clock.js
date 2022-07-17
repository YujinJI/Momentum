const clock = document.querySelector("#clock");

function getClock() {
  const data = new Date();
  const hours = String(data.getHours()).padStart(2, "0");
  const minutes = String(data.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);