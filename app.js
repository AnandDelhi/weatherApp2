const searchBox = document.querySelector(".searchBox");
const searchButton = document.querySelector(".searchButton");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feelsLike");
const gaugeBody = document.querySelector(".gaugeBody");
const weatherIcon = document.querySelector(".weatherIcon");
const container = document.querySelector(".container");

const cityName = document.querySelector(".cityName");
const dateTime = document.querySelector(".dateTime");

const condition = document.querySelector(".conditionData");
const humidity = document.querySelector(".humidityData");
const uv = document.querySelector(".uvData");
const visibility = document.querySelector(".visibilityData");
const wind = document.querySelector(".windData");

const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.weatherapi.com/v1/current.json?key=5f15584a6bc748a7bdf122443220307&q=Delhi"
);
request.send();
request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
  console.log(data.current.condition.text);

  temperature.textContent = `${data.current.temp_c}°C`;
  cityName.textContent = `${data.location.name}`;
  dateTime.textContent = `${data.location.localtime}`;
  condition.textContent = `${data.current.condition.text}`;
  humidity.textContent = `${data.current.humidity}%`;
  uv.textContent = `${data.current.uv}`;
  visibility.textContent = `${data.current.vis_km} km`;
  wind.textContent = `${data.current.wind_kph} kmph`;
  gaugeBody.style.transform = `rotate(${data.current.temp_c / 100}turn)`;
  weatherIcon.style.backgroundImage = `url(${data.current.condition.icon})`;
  container.style.backgroundImage = `url(./weather-condition-images/${data.current.condition.text}.jpg)`;
});

searchButton.addEventListener("click", function () {
  const city = searchBox.value;
  const request2 = new XMLHttpRequest();
  request2.open(
    "GET",
    `https://api.weatherapi.com/v1/current.json?key=5f15584a6bc748a7bdf122443220307&q=${city}`
  );
  request2.send();
  request2.addEventListener("load", function () {
    const data2 = JSON.parse(this.responseText);
    console.log(data2);

    temperature.textContent = `${data2.current.temp_c}°C`;

    cityName.textContent = `${data2.location.name}`;
    dateTime.textContent = `${data2.location.localtime}`;
    condition.textContent = `${data2.current.condition.text}`;
    humidity.textContent = `${data2.current.humidity}%`;
    uv.textContent = `${data2.current.uv}`;
    visibility.textContent = `${data2.current.vis_km} km`;
    wind.textContent = `${data2.current.wind_kph} kmph from ${data2.current.wind_dir}`;
    gaugeBody.style.transform = `rotate(${data2.current.temp_c / 100}turn)`;
    weatherIcon.style.backgroundImage = `url(${data2.current.condition.icon})`;
    container.style.backgroundImage = `url(./weather-condition-images/${data2.current.condition.text}.jpg)`;
    console.log(container.style.backgroundImage);
  });
});
