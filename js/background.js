colors = ["#f1f5f9", "#ddf5f1", "#dde4f5", "#f5e4dd", "#EBDDF5", "#F5E4DD"];

const body = document.querySelector("body");
const logoutBtn = document.querySelector(".logout-btn");
const changeBtn = document.querySelector(".changeBg");

const randomColor = colors[Math.floor(Math.random() * colors.length)];

body.style.backgroundColor = `${randomColor}`;
wrap.style.backgroundColor = `${randomColor}`;
logoutBtn.style.backgroundColor = `${randomColor}`;

function changeBackgroundColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = `${randomColor}`;
  wrap.style.backgroundColor = `${randomColor}`;
  logoutBtn.style.backgroundColor = `${randomColor}`;
}

changeBtn.addEventListener("click", changeBackgroundColor);