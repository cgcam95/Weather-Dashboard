var searchButtonEl = document.querySelector("#searchButton");
var inputEl = document.querySelector("#input");
var citySearchEl = document.querySelector("#searchCity");
var previousSearchEl = document.querySelector("#previousSearch");
var cityEl = document.querySelector("#city");
var tempEl = document.querySelector("#temp");
var humidityEl = document.querySelector("#humidity");
var windEl = document.querySelector("#wind");
var uvEl = document.querySelector("#uv");
var forecastEl = document.querySelector("#forecast");
var cityStorage = localStorage.getItem("city");
if ((cityStorage = null)) {
  var cityHistory = [];
} else {
  cityHistory = cityStorage.split(",");
}

var submitSearch = function (event) {
  event.preventDefault();

  var city = citySearchEl.value;
  if (city) {
    getAPIData(city);
    cityHistory.push(city);
    localStorage.setItem("city", cityHistory);
    previousSearchEl.innerHTML += "<p>" + city + "</p>";
    citySearchEl.value = " ";
  } else {
    ("Enter City");
  }
};

var searchForCity = function () {
  for (let i = 0; i < cityHistory.length; i++) {
    previousSearchEl.innerHTML += "<p>" + cityHistory[i] + "</p>";
  }
};

function getAPIData(search) {
    
};

function currentWeather(lat, lon, search) {
    var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+"&exclude={part}&appid=e31435a446027bbcfddf7e313e9d01c5"
    fetch(currentWeatherUrl)
    .then(function(weather) {
        if(weather.ok) {
            weather.json().then(function(data) {
                cityEl.innerHTML= "City Name: " + search
                tempEl.innerHTML="Temperature: " + data.current.temp + 'f'
                humidityEl.innerHTML="Humidity: " + data.current.humidity + '%'
                windEl.innerHTML="Wind: " + data.current.wind.speed + 'MPH'
                uvEl.innerHTML="UV index: " + data.current.uvi

;            })
            w
        }
    })
}

searchButtonEl.addEventListener('click', submitSearch)