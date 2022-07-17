dayWrap = document.querySelector("#day-wrap");
dayForm = document.querySelector("#day-form");
dayInput = document.querySelector("#day-form input");
writeDDay = document.querySelector("#day-wrap p:last-child");

function getDiffDay(day) {
  const now = new Date();
  const goalDay = new Date(`${day} 00:00:00`);
  const diff = goalDay.getTime() - now.getTime();

  const diffDays = Math.floor(diff / (1000*60*60*24));
  // dayWrap.innerHTML = `<p>D - ${diffDays}</p>`
  writeDDay.innerText = `D - ${diffDays}`;
}

function onClickSubmit(e) {
  e.preventDefault();
  const day = dayInput.value;
  getDiffDay(day);
}

dayForm.addEventListener("submit", onClickSubmit);