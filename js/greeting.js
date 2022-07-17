const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const wrap = document.querySelector(".wrap");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  // e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function onLogoutClick(e) {
  e.preventDefault();
  history.go(0);
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  wrap.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = "";
}

function paintGreeting(username) {
  wrap.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `
    <span>Welcome, <strong>${username}</strong></span>
    <button class="logout-btn"><img src="../img/logout.svg" class="logout-img"/></button>
  `
  const logoutBtn = document.querySelector(".logout-btn");
  logoutBtn.addEventListener("click", onLogoutClick);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(saveUsername);
}