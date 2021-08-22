var searchHistory = []
var city = ""
var weatherApiUrl = 'https://www.weatherapi.com/api-explorer.aspx#forecast'
var weatherApiKey = 'afcf018b67264ad982201306211908'

var searchForm = document.querySelector('#search-form');
var input = document.getElementById('search-input');
var today = document.querySelector('#today-weather');
var forecast = document.querySelector('#forecast');
var searchHistoryContainer = document.querySelector('#history')

var curTemp = document.getElementById('current-temp')
var curHumidity = document.getElementById('humid')
var curWind = document.getElementById('wind-mph')
var curUV = document.getElementById('current-uv')

function searchHistory() {
    searchHistoryContainer.innerHTML = ''
    for (var i = searchHistory.length -1; i >= 0; i--) {
        var btn = createElement('button')
        btn.setAttribute('type', 'button')
        btn.setAttribute('today-weather forecast')
        btn.classList.add('history-btn')

        btn.setAttribute('data-searchHistory', searchHistory[i])
        btn.textContent = searchHistory[i]
        searchHistoryContainer.append(btn)
    }
}

function displayWeather(event){
  event.preventDefault();
  if(searchHistory.val().trim()!==""){
      city=searchHistory.val().trim();
      currentWeather(city);
  }
}

function weatherAPI() {
    //Global Search Variables
    var cityName = localStorage.getItem("City Name");
    var weatherURL = 'https://api.weatherapi.com/v1/forecast.json?key=afcf018b67264ad982201306211908&q=' + cityName + '=5&aqi=no&alerts=no'
    fetch(weatherURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //   console.log("---City Name, State---");
        //   console.log(data.location.name + ", " + data.location.region);
        //   console.log("---Day's Avg Temp---");
        //   console.log(data.forecast.forecastday[0].day.avgtemp_f);
        //   console.log("---Day's Condition---");
        //   console.log(data.current.condition.text);
      });
  }
  
  weatherAPI();

