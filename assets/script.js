// DATA ============================================================

// // global variable or starting data
APIkey = "c344baf284cfbf83abc80c8a68d21ea2"
var currentDate = moment().format("dddd MMMM Do, YYYY");
cityInput = "Ankara"
// FUNCTIONS=========================================================

// currentDay function with cityInput
function currentDay(cityInput) {
    // Call current data
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=" + APIkey;
    // Ajax Call
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
    // Append the current weather for that city
        // the city name & date
        var h2Element = $("<h4>");
        h2Element.attr("class", "cityName");
        $('section.currentWeather').append(h2Element);
        $(".cityName").text(response.name + " - " + currentDate);
        // an icon representation of weather conditions
        // new paragraf 
        var ulElement = $("<ul>");
        ulElement.attr("class", "current");
        $('section.currentWeather').append(ulElement);
        // add temperature
        $(".current").append("<li>" + "Temperature: " + response.main.temp + " °F" + "</li>");
        // add humidity
        $(".current").append("<li>" + "Humidity: " + response.main.humidity + "</li>");
        // add wind speed
        $(".current").append("<li>" + "Wind Speed: " + response.wind.speed + "</li>");
        // add UV index
            // color that indicates whether the conditions are favorable - green, moderate - yellow, or severe - red
        });
}

// Call 5 day forecast data
    // api.openweathermap.org/data/2.5/forecast?q= + {city name} + &appid= + {API key} + &units=imperial

// Append 5-day forecast 
    // the date
    // an icon representation of weather conditions
    // the temperature
    // the humidity

// Load & list previously searched cities from Local Storage

// USER INTERRACTIONS ==============================================

// When search button is clicked
    // reset the page
    // store city at local storage
    // run currentDay function with cityInput
    // run fiveDay function with cityInput
    // append the city name as a button in the history

// When a city button from the history is clicked
    // reset the page
    // cityInput is the value of city button
    // run currentDay function with cityInput
    currentDay(cityInput)
    // run fiveDay function with cityInput




