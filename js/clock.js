const clock = document.querySelector("#clock");

function getClock() {
  const data = new Date();
  const month = String(data.getMonth()).padStart(2, "0");
  const day = String(data.getDay()).padStart(2, "0");
  const hours = String(data.getHours()).padStart(2, "0");
  const minutes = String(data.getMinutes()).padStart(2, "0");

  let time = '';
  if (hours >= 0 && hours < 12) {
    time = 'AM';
  } else {
    time = 'PM';
  }
  clock.innerText = `${month}월 ${day}일 ${time} ${hours}:${minutes}`;
  console.log(parseInt(hours));
}

getClock();
setInterval(getClock, 1000);