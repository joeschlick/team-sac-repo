console.log("loaded the javascript")
var apiKey = "509af036101146459438893ecc05180f"


$("#search-btn").on("click", function() {
    console.log("on click button")
    Forecast()
})

function Forecast() {
     var queryVal = `https://api.weatherbit.io/v2.0/forecast/daily?city=truckee,california&key=${apiKey}`
    // var queryVal = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${state}&key=${apiKey}`
    // I need to make changes to the city and state in the future. 
    // I either change all state to 2 letter
    // Or in the state names, we need to make the spaces in state names to a + sign.
    // not sure what is better.
    $.ajax({
        type: "GET",
        url: queryVal
    }).then(function (apiFunction) {
        
        console.log(apiFunction)
        $("#five-day-forecast").empty()
        for (let i = 2; i < apiFunction.data.length; i++) {
            var highTemp = apiFunction.data[i].high_temp
            var highTempInFahrenheit = highTemp * 9 / 5 + 32
            var lowTemp = apiFunction.data[i].min_temp
            var lowTempInFahrenheit = lowTemp * 9 / 5 + 32
            var kphConvertGusts = apiFunction.data[i].wind_gust_spd / 1.609344

            if ( i === 2) {$("#five-day-forecast").append(`<div class="medium-2 columns">
            <h3>Today In: ${apiFunction.city_name} </h3>
            <p>High Temp: ${Math.round(highTempInFahrenheit)}</p>
            <p>Low Temp: ${Math.round(lowTempInFahrenheit)}</p>
            <p>Current Condition: ${apiFunction.data[i].weather.description}
            <p>Wind-Direction: ${apiFunction.data[i].wind_cdir_full}
            <p>Gusts up to: ${Math.round(kphConvertGusts)} MPH

            </div>`)}
            else if (i >= 7){break;}
            
            const myDate = new Date(apiFunction.data[i].valid_date).toLocaleDateString();
            $("#five-day-forecast").append(`<div class="medium-2 columns">
            <h3>${myDate} in ${apiFunction.city_name}</h3>
            <p>High Temp: ${Math.round(highTempInFahrenheit)}</p>
            <p>LowTemp: ${Math.round(lowTempInFahrenheit)}</p>
            <p>Current Condition: ${apiFunction.data[i].weather.description}
            <p>Wind-Direction: ${apiFunction.data[i].wind_cdir_full}
            <p>Gusts up to: ${Math.round(kphConvertGusts)} MPH
            </div>`)
        }
          
    })
}