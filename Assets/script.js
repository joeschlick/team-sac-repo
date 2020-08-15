//api for covid data by state http://coronavirusapi.com/getTimeSeries/[2 letter state abbreviation]
//openweathermap current conditions url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchField + "&appid=53d2f99f562f36701d4bf49111eb24c6",
$(document).ready(function () {
  var runSearch = $("#run-search");

  runSearch.click(function () {
    var searchCity = $("#search-city").val();
    var searchState = $("#search-state").val();
    console.log("click");
    console.log(searchCity);
    console.log(searchState);
    articleSearch(searchCity, searchState);
  });

  function articleSearch(city, state) {
    var newsQueryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      city +
      " " +
      state +
      "&api-key=6bx62GJuVcNmyKs61ltfKzawldq2gfs0";
    console.log(newsQueryURL);
    $.ajax({
      url: newsQueryURL,
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      console.log(response);
    });
  }
});

console.log("loaded the javascript");
var apiKey = "509af036101146459438893ecc05180f";

$("#search-btn").on("click", function () {
  console.log("on click button");
  Forecast();
});

function Forecast() {
  var city = $("#search-city").val();
  var state = $("#search-state").val();
  var queryVal = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${state}&key=${apiKey}`;
  $.ajax({
    type: "GET",
    url: queryVal,
  }).then(function (apiFunction) {
    console.log(apiFunction);
    $("#five-day-forecast").empty();
    for (let i = 2; i < apiFunction.data.length; i++) {
      var highTemp = apiFunction.data[i].high_temp;
      var highTempInFahrenheit = (highTemp * 9) / 5 + 32;
      var lowTemp = apiFunction.data[i].min_temp;
      var lowTempInFahrenheit = (lowTemp * 9) / 5 + 32;
      var kphConvertGusts = apiFunction.data[i].wind_gust_spd / 1.609344;

      if (i === 2) {
        $("#five-day-forecast").append(`<div class="medium-2 columns">
            <h3>Today In: ${apiFunction.city_name} </h3>
            <p>High Temp: ${Math.round(highTempInFahrenheit)}</p>
            <p>Low Temp: ${Math.round(lowTempInFahrenheit)}</p>
            <p>Current Condition: ${apiFunction.data[i].weather.description}
            <p>Wind-Direction: ${apiFunction.data[i].wind_cdir_full}
            <p>Gusts up to: ${Math.round(kphConvertGusts)} MPH
            </div>`);
      } else if (i >= 7) {
        break;
      }

      const myDate = new Date(
        apiFunction.data[i].valid_date
      ).toLocaleDateString();
      $("#five-day-forecast").append(`<div class="medium-2 columns">
            <h3>${myDate} in ${apiFunction.city_name}</h3>
            <p>High Temp: ${Math.round(highTempInFahrenheit)}</p>
            <p>LowTemp: ${Math.round(lowTempInFahrenheit)}</p>
            <p>Current Condition: ${apiFunction.data[i].weather.description}
            <p>Wind-Direction: ${apiFunction.data[i].wind_cdir_full}
            <p>Gusts up to: ${Math.round(kphConvertGusts)} MPH
            </div>`);
    }
  });
}
