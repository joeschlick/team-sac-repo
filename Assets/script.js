$(document).ready(function () {
  //Moves to top of page on refresh
  $(window).on("beforeunload", function () {
    $(window).scrollTop(0);
  });


  //Click fucntion for search button for weather
  var apiKey = "509af036101146459438893ecc05180f";
  $("#search-btn").on("click", function () {
    console.log("on click button");
    Forecast();
  });

  //Searches and displays Weatherbit API for weather info
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
          $("#five-day-forecast")
          .append(`<div class="card small-6 large-2 columns" id="weather-card">
          <h5 class="fdf" style="padding-top: 10px;">Today In: ${apiFunction.city_name} </h5>
          <img class="images" id="image-hover-effect" src="https://www.weatherbit.io/static/img/icons/${apiFunction.data[i].weather.icon}.png">
          <p class="fdf">High Temp: ${Math.round(highTempInFahrenheit)}</p>
          <p class="fdf">Low Temp: ${Math.round(lowTempInFahrenheit)}</p>
          <p class="fdf">Current Condition: ${apiFunction.data[i].weather.description}
          <p class="fdf">Wind-Direction: ${apiFunction.data[i].wind_cdir_full}
          <p class="fdf" style="padding-bottom: 4px;">Gusts up to: ${Math.round(kphConvertGusts)} MPH</div>`
        );
        } else if (i >= 7) {
          break;
        }

        const myDate = new Date(
          apiFunction.data[i].valid_date).toLocaleDateString();
          $("#five-day-forecast").append(`<div class="card small-6 large-2 columns" id="weather-card">
          <h5 class="fdf" style="padding-top: 12px;">${myDate}</h5>
          <img class="images tooltiptext" id="image-hover-effect" src="https://www.weatherbit.io/static/img/icons/${apiFunction.data[i].weather.icon}.png">
          <p class="fdf">High Temp: ${Math.round(highTempInFahrenheit)}</p>
          <p class="fdf">LowTemp: ${Math.round(lowTempInFahrenheit)}</p>
          <p class="fdf">Current Condition: ${apiFunction.data[i].weather.description}
          <p class="fdf">Wind-Direction: ${apiFunction.data[i].wind_cdir_full}
          <p class="fdf" style="padding-bottom: 10px;">Gusts up to: ${Math.round(kphConvertGusts)} MPH</div>`
        );
      }
    });
  }

  //Searches and diplays NYT API articles based on search input
  var runSearch = $("#search-btn");
  runSearch.click(function () {
    var searchCity = $("#search-city").val();
    var searchState = $("#search-state").val();
    console.log("click");
    console.log(searchCity);
    console.log(searchState);
    articleSearch(searchCity, searchState);
    $("#article-space").empty();
    $("#article-row").empty();
    $("#article-content").empty();
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
        var articleUrlContent = $("<p>");
        articleSpace.append(articleRow);
        articleRow.append(articleContent);

        var headline = articles.headline.main;
        if (headline) {
          articleContent.append("<h5>" + "<strong>" + headline + "<strong>" + "<h5>");
        }

        var articleAbstract = articles.abstract;
        if (articleAbstract) {
          articleContent.append(articleAbstract).attr("class", "article-row-content-description");
        }

        var articleUrl = articles.web_url;
        articleContent.append(articleUrlContent);
        var articleUrlLink = $("<a>").attr({ href: articleUrl, target: "blank" });
        articleUrlContent.append(articleUrlLink);
        articleUrlLink.append(articleUrl);
      }
    });
  }
  //Modal variables and commands
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0]
  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  //Travel advice button click starts modal function
  $("#myBtn").on("click", function () {
    console.log("on click button");
    $("#modal-text").empty();
    modalFunction();
  });

  function modalFunction() {
    var newsQueryURL =
      "https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true";
    console.log(newsQueryURL);
    $.ajax({
      url: newsQueryURL,
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      $("#modal-text").empty();
      var state = $("#search-state option:selected").text();
      for (let i = 0; i < response.casesByState.length; i++) {
        var casesReported = response.casesByState[i].casesReported;
        console.log(response.casesByState[i]);
        if (state === response.casesByState[i].name) {
          $("#modal-text").append(
            `<p>There are ${casesReported} cases of covid-19 reported in ${state}</p>
            <p>Stay the <u>Fuck</u> home!</p>`
          );
        }
      }
    });
  }
});
