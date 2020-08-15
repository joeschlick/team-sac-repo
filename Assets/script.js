//api for covid data by state http://coronavirusapi.com/getTimeSeries/[2 letter state abbreviation]
//openweathermap current conditions url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchField + "&appid=53d2f99f562f36701d4bf49111eb24c6",
$(document).ready(function () {
  var runSearch = $("#search-btn");

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
    }).then(function (response1) {
      console.log(response1);

      for (let i = 0; i < 5; i++) {
        var articles = response1.response.docs[i];
        var articleSpace = $("#article-space");
        var articleRow = $("<div>").attr("class", "article-row");
        var articleContent = $("<div>").attr("class", "article-content");
        articleSpace.append(articleRow);
        articleRow.append(articleContent);

        var headline = articles.headline.main;
        if (headline) {
          articleContent.append("<h5>" + "<strong>" + headline + "<strong>" + "<h5>")
        }

        var articleAbstract = articles.abstract;
        if (articleAbstract) {
          articleContent.append(articleAbstract).attr("class", "article-row-content-description");
        }

        var articleUrl = articles.web_url;
        articleContent.append("<p>" + "<br>" + "<a>" + articleUrl + "<a>" + "<p>").attr("href", articleUrl);
      }
    });
  }

  console.log("loaded the javascript");
  var apiKey = "509af036101146459438893ecc05180f";

  $("#search-btn").on("click", function () {
    console.log("on click button");
    Forecast();
  });

  function Forecast() {
    var queryVal = `https://api.weatherbit.io/v2.0/forecast/daily?city=truckee,california&key=${apiKey}`;
    // var queryVal = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${state}&key=${apiKey}`
    // I need to make changes to the city and state in the future.
    // I either change all state to 2 letter
    // Or in the state names, we need to make the spaces in state names to a + sign.
    // not sure what is better.
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

<<<<<<< HEAD
      const myDate = new Date(
        apiFunction.data[i].valid_date
      ).toLocaleDateString();
      $("#five-day-forecast").append(`<div class="medium-2 columns">
=======
            </div>`);
        } else if (i >= 7) {
          break;
        }

        const myDate = new Date(
          apiFunction.data[i].valid_date
        ).toLocaleDateString();
        $("#five-day-forecast").append(`<div class="medium-2 columns">
>>>>>>> master
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
});
