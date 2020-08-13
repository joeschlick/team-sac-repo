//api for covid data by state http://coronavirusapi.com/getTimeSeries/[2 letter state abbreviation]
//openweathermap current conditions url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchField + "&appid=53d2f99f562f36701d4bf49111eb24c6",
$(document).ready(function () {
    var runSearch = $("#run-search");
    
    
    runSearch.click(function () {
        var searchCity = $("#search-city").val()
        var searchState = $("#search-state").val()
        console.log("click")
        console.log(searchCity)
        console.log(searchState)
        articleSearch(searchCity, searchState) 
    })

    function articleSearch(city, state) {
        var newsQueryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + city + " " + state + "&api-key=6bx62GJuVcNmyKs61ltfKzawldq2gfs0"
        console.log(newsQueryURL)
        $.ajax({
            url: newsQueryURL,
            method: "GET",
            dataType: "json"
        }).then(function(response) {
            console.log(response)
        })
    }
    

})


