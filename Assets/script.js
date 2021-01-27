// DATA ============================================================
// // global variable or starting data
var APIKey = "c344baf284cfbf83abc80c8a68d21ea2";

// FUNCTIONS=========================================================

// Call current data
    // api.openweathermap.org/data/2.5/weather?q= + {city name} + &appid= + {API key} + &units=imperial

// Append the current weather for that city
    // the city name, 
    // the date
    // an icon representation of weather conditions
    // the temperature 
    // the humidity
    // the wind speed
    // the UV index
        // color that indicates whether the conditions are favorable - green, moderate - yellow, or severe - red

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
    // run fiveDay function with cityInput




