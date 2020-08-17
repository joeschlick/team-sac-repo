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
        $("#five-day-forecast").append(`<div class="card small-6 large-2 columns" id="weather-card">
            <h5 class="fdf" style="padding-top: 10px;">Today In: ${apiFunction.city_name} </h5>
            <img class="images" id="image-hover-effect" src="https://www.weatherbit.io/static/img/icons/${apiFunction.data[i].weather.icon}.png">
            <p class="fdf">High Temp: ${Math.round(highTempInFahrenheit)}</p>
            <p class="fdf">Low Temp: ${Math.round(lowTempInFahrenheit)}</p>
            <p class="fdf">Current Condition: ${apiFunction.data[i].weather.description}
            <p class="fdf">Wind-Direction: ${apiFunction.data[i].wind_cdir_full}
            <p class="fdf" style="padding-bottom: 4px;">Gusts up to: ${Math.round(kphConvertGusts)} MPH
            </div>`);
      } else if (i >= 7) {
        break;
      }
      const myDate = new Date(
        apiFunction.data[i].valid_date
      ).toLocaleDateString();
      $("#five-day-forecast").append(`<div class="card small-6 large-2 columns" id="weather-card">
             <h5 class="fdf" style="padding-top: 12px;">${myDate}</h5>
             <img class="images tooltiptext" id="image-hover-effect" src="https://www.weatherbit.io/static/img/icons/${apiFunction.data[i].weather.icon}.png">
            <p class="fdf">High Temp: ${Math.round(highTempInFahrenheit)}</p>
            <p class="fdf">LowTemp: ${Math.round(lowTempInFahrenheit)}</p>
            <p class="fdf">Current Condition: ${apiFunction.data[i].weather.description}
            <p class="fdf">Wind-Direction: ${apiFunction.data[i].wind_cdir_full}
            <p class="fdf" style="padding-bottom: 10px;">Gusts up to: ${Math.round(kphConvertGusts)} MPH
            </div>`);
    }
  });
}

  var runSearch = $("#search-btn");

  runSearch.click(function () {
    var searchCity = $("#search-city").val();
    var searchState = $("#search-state").val();
    console.log("click");
    console.log(searchCity);
    console.log(searchState);
    articleSearch(searchCity, searchState);
  });

  function articleSearch(city1, state1) {
    var newsQueryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      city1 +
      " " +
      state1 +
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
        var articleUrlContent = $("<p>")
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
        articleContent.append(articleUrlContent)
        var articleUrlLink = $("<a>").attr({"href": articleUrl, "target": "blank"});
        articleUrlContent.append(articleUrlLink)
        articleUrlLink.append(articleUrl)
      }
    });
  }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$("#myBtn").on("click", function () {
  console.log("on click button");
  $("#modal-text").empty();
  modalFunction();
});

function modalFunction() {
  var state = $("#search-state").val();
  var newsQueryURL = "https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true"
  console.log(newsQueryURL);
  $.ajax({
    url: newsQueryURL,
    method: "GET",
    dataType: "json",
  }).then(function (response) {
    console.log(response);
    $("#modal-text").empty();
    $("#modal-text").append(`
    <p>${state}</p>
    `);
  });
}


