// weather = Clouds, Clear, Thunderstorm, Drizzle, Rain, Snow, Atmosphere
const weatherWrap = document.querySelector("#weather-wrap");
const API_KEY = "2b5ade31d2171f074d525b36bdf909c4";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather p:first-child");
    const temp = document.querySelector("#weather .temp");
    const city = document.querySelector("#location");
    const temps = document.querySelector("#weather .temps");
    city.innerText = `${data.name}`;
    const weatherInfo = data.weather[0].main;
    weatherWrap.style.backgroundSize = `cover`;
    if (weatherInfo === "Clouds" || weatherInfo === "Atmosphere") {
      weatherWrap.style.backgroundImage = `url(https://source.unsplash.com/v9bnfMCyKbg)`;
    } else if (weatherInfo === "Clear") {
      weatherWrap.style.backgroundImage = `url(https://source.unsplash.com/PEm_sLmJT-w)`;
    } else if (weatherInfo === "Thunderstorm" || weatherInfo === "Drizzle") {
      weatherWrap.style.backgroundImage = `url(https://source.unsplash.com/jh2KTqHLMjE)`;
    } else if (weatherInfo === "Rain") {
      weatherWrap.style.backgroundImage = `url(https://source.unsplash.com/22x7fxFpl_8)`;
    } else if (weatherInfo === "Snow") {
      weatherWrap.style.backgroundImage = `url(https://source.unsplash.com/w8hWTFpGtpY)`;
    }
    weather.innerText = `${data.weather[0].main}`;
    temp.innerText = `${data.main.temp}°`;
    temps.innerText = `${data.main.temp_max}° / ${data.main.temp_min}°`;
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);