const apiKey = "f7fa89fc9b7ee6b5b2e3e72cbfde8aaa";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// const cardBox = document.querySelector(".weather");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    // saveData();
  } else {
    var data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°c`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + `km/h`;

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Humidity") {
      weatherIcon.src = "humidity.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "snow.png";
    } else if (data.weather[0].main == "Wind") {
      weatherIcon.src = "wind.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather-name").innerHTML =
      `(` + data.weather[0].main + `)`;
    document.querySelector(".weather").style.display = "block";
  }
  // saveData();
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// function saveData() {
//   localStorage.setItem("data", cardBox.innerHTML);
// }
// function showTask() {
//   cardBox.innerHTML = localStorage.getItem("data");
// }
// showTask();
