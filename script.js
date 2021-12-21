let locationToDisplay = "auckland"; // Default value
let weatherObject = {};
const form = document.querySelector("form");
const currentLocation = document.querySelector("#currentLocation");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherText = document.querySelector("#weatherText");
let loadingGif = document.createElement("img");

const temperature = document.querySelector("#temperature");
const temperatureHigh = document.querySelector("#temperatureHigh");
const temperatureLow = document.querySelector("#temperatureLow");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");
const windDirection = document.querySelector("#windDirection");
const forecastDayItems = document.querySelectorAll(".forecastDay");
const outerContainer = document.querySelector("#outerContainer");

const date1 = document.querySelector("#date1");
const date2 = document.querySelector("#date2");
const date3 = document.querySelector("#date3");
const date4 = document.querySelector("#date4");
const date5 = document.querySelector("#date5");
const date6 = document.querySelector("#date6");
const date7 = document.querySelector("#date7");

const day1rainChance = document.querySelector("#day1rainChance");
const day1weatherIcon = document.querySelector("#day1weatherIcon");
const day1weather = document.querySelector("#day1weather");
const day1temperature = document.querySelector("#day1temperature");
const day2rainChance = document.querySelector("#day2rainChance");
const day2weatherIcon = document.querySelector("#day2weatherIcon");
const day2weather = document.querySelector("#day2weather");
const day2temperature = document.querySelector("#day2temperature");
const day3rainChance = document.querySelector("#day3rainChance");
const day3weatherIcon = document.querySelector("#day3weatherIcon");
const day3weather = document.querySelector("#day3weather");
const day3temperature = document.querySelector("#day3temperature");
const day4rainChance = document.querySelector("#day4rainChance");
const day4weatherIcon = document.querySelector("#day4weatherIcon");
const day4weather = document.querySelector("#day4weather");
const day4temperature = document.querySelector("#day4temperature");
const day5rainChance = document.querySelector("#day5rainChance");
const day5weatherIcon = document.querySelector("#day5weatherIcon");
const day5weather = document.querySelector("#day5weather");
const day5temperature = document.querySelector("#day5temperature");
const day6rainChance = document.querySelector("#day6rainChance");
const day6weatherIcon = document.querySelector("#day6weatherIcon");
const day6weather = document.querySelector("#day6weather");
const day6temperature = document.querySelector("#day6temperature");
const day7rainChance = document.querySelector("#day7rainChance");
const day7weatherIcon = document.querySelector("#day7weatherIcon");
const day7weather = document.querySelector("#day7weather");
const day7temperature = document.querySelector("#day7temperature");

async function displayWeatherData(weatherObject, locationToDisplay) {

    forecastDayItems.forEach(element => element.classList.remove("hidden"));
    outerContainer.style.justifyContent = "flex-start";
    outerContainer.removeChild(loadingGif);

    // Transform search term to sentence case and display it
    locationToDisplay = locationToDisplay.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    currentLocation.textContent = locationToDisplay;

    weatherIcon.src=`icons/${weatherObject.weatherIcon}.png`;
    weatherText.textContent = weatherObject.weather;

    temperature.textContent = `${weatherObject.temperature.toFixed(1)}°`;
    temperatureHigh.innerText = `High: ${weatherObject.temperatureMax.toFixed(1)}°`;
    temperatureLow.textContent = `Low: ${weatherObject.temperatureMin.toFixed(1)}°`;
    humidity.textContent = `Humidity: ${weatherObject.humidity}%`;

    windSpeed.textContent = `Wind speed: ${weatherObject.windSpeed.toFixed(1)} m/s`;
    windDirection.textContent = `Wind direction: ${weatherObject.windDirection}°`;

    let date = new Date();

    // Forecast for the next 7 days
    date.setDate(date.getDate() + 1);
    date1.textContent = date.toDateString().slice(0, -5); // Cut off 4-digit year, plus space
    day1temperature.textContent = `${Math.round(weatherObject.day1temperature)}°`;
    day1weather.textContent = weatherObject.day1weather;
    day1weatherIcon.src=`icons/${weatherObject.day1weatherIcon}.png`;
    day1rainChance.textContent = `${Math.round(weatherObject.day1rainChance*100)}% chance of rain`;

    date.setDate(date.getDate() + 1);
    date2.textContent = date.toDateString().slice(0, -5); // Cut off 4-digit year, plus space
    day2temperature.textContent = `${Math.round(weatherObject.day2temperature)}°`;
    day2weather.textContent = weatherObject.day2weather;
    day2weatherIcon.src=`icons/${weatherObject.day2weatherIcon}.png`;
    day2rainChance.textContent = `${Math.round(weatherObject.day2rainChance*100)}% chance of rain`;

    date.setDate(date.getDate() + 1);
    date3.textContent = date.toDateString().slice(0, -5); // Cut off 4-digit year, plus space
    day3temperature.textContent = `${Math.round(weatherObject.day3temperature)}°`;
    day3weather.textContent = weatherObject.day3weather;
    day3weatherIcon.src=`icons/${weatherObject.day3weatherIcon}.png`;
    day3rainChance.textContent = `${Math.round(weatherObject.day3rainChance*100)}% chance of rain`;

    date.setDate(date.getDate() + 1);
    date4.textContent = date.toDateString().slice(0, -5); // Cut off 4-digit year, plus space
    day4temperature.textContent = `${Math.round(weatherObject.day4temperature)}°`;
    day4weather.textContent = weatherObject.day4weather;
    day4weatherIcon.src=`icons/${weatherObject.day4weatherIcon}.png`;
    day4rainChance.textContent = `${Math.round(weatherObject.day4rainChance*100)}% chance of rain`;

    date.setDate(date.getDate() + 1);
    date5.textContent = date.toDateString().slice(0, -5); // Cut off 4-digit year, plus space
    day5temperature.textContent = `${Math.round(weatherObject.day5temperature)}°`;
    day5weather.textContent = weatherObject.day5weather;
    day5weatherIcon.src=`icons/${weatherObject.day5weatherIcon}.png`;
    day5rainChance.textContent = `${Math.round(weatherObject.day5rainChance*100)}% chance of rain`;

    date.setDate(date.getDate() + 1);
    date6.textContent = date.toDateString().slice(0, -5); // Cut off 4-digit year, plus space
    day6temperature.textContent = `${Math.round(weatherObject.day6temperature)}°`;
    day6weather.textContent = weatherObject.day6weather;
    day6weatherIcon.src=`icons/${weatherObject.day6weatherIcon}.png`;
    day6rainChance.textContent = `${Math.round(weatherObject.day6rainChance*100)}% chance of rain`;

    date.setDate(date.getDate() + 1);
    date7.textContent = date.toDateString().slice(0, -5); // Cut off 4-digit year, plus space
    day7temperature.textContent = `${Math.round(weatherObject.day7temperature)}°`;
    day7weather.textContent = weatherObject.day7weather;
    day7weatherIcon.src=`icons/${weatherObject.day7weatherIcon}.png`;
    day7rainChance.textContent = `${Math.round(weatherObject.day7rainChance*100)}% chance of rain`;
}

function processWeatherData(currentWeatherData, forecastedWeatherData, locationToDisplay) {

    // Current weather documentation: https://openweathermap.org/current
    // Forecasted weather documentation: https://openweathermap.org/api/one-call-api

    // Temperature
    weatherObject.temperature = currentWeatherData.main.temp;
    weatherObject.temperatureMax = currentWeatherData.main.temp_max;
    weatherObject.temperatureMin = currentWeatherData.main.temp_min;

    // Humidity, %
    weatherObject.humidity = currentWeatherData.main.humidity;

    // Group of weather parameters (Rain, Snow, Extreme etc.)
    weatherObject.weather = currentWeatherData.weather[0].main;

    // See https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 for icon help
    weatherObject.weatherIcon = currentWeatherData.weather[0].icon;

    // Wind direction, degrees (meteorological)
    weatherObject.windDirection = currentWeatherData.wind.deg;

    // Wind speed. Unit Default: meter/sec
    weatherObject.windSpeed = currentWeatherData.wind.speed;

    // Shift in seconds from UTC
    weatherObject.timezoneOffset = forecastedWeatherData.timezone_offset;

    // 7 day forecast. I'm using day temperatures, chance of rain, and primary weather condition.
    // Day 'x' refers to number of days from today - e.g. day1 would be tomorrow.
    weatherObject.day1temperature = forecastedWeatherData.daily[1].temp.day; // Not 0-indexed, as today's weather is from  currentWeatherData
    weatherObject.day1weather = forecastedWeatherData.daily[1].weather[0].main;
    weatherObject.day1weatherIcon = forecastedWeatherData.daily[1].weather[0].icon;
    weatherObject.day1rainChance = forecastedWeatherData.daily[1].pop;

    weatherObject.day2temperature = forecastedWeatherData.daily[2].temp.day;
    weatherObject.day2weather = forecastedWeatherData.daily[2].weather[0].main;
    weatherObject.day2weatherIcon = forecastedWeatherData.daily[2].weather[0].icon;
    weatherObject.day2rainChance = forecastedWeatherData.daily[2].pop;

    weatherObject.day3temperature = forecastedWeatherData.daily[3].temp.day;
    weatherObject.day3weather = forecastedWeatherData.daily[3].weather[0].main;
    weatherObject.day3weatherIcon = forecastedWeatherData.daily[3].weather[0].icon;
    weatherObject.day3rainChance = forecastedWeatherData.daily[3].pop;

    weatherObject.day4temperature = forecastedWeatherData.daily[4].temp.day;
    weatherObject.day4weather = forecastedWeatherData.daily[4].weather[0].main;
    weatherObject.day4weatherIcon = forecastedWeatherData.daily[4].weather[0].icon;
    weatherObject.day4rainChance = forecastedWeatherData.daily[4].pop;

    weatherObject.day5temperature = forecastedWeatherData.daily[5].temp.day;
    weatherObject.day5weather = forecastedWeatherData.daily[5].weather[0].main;
    weatherObject.day5weatherIcon = forecastedWeatherData.daily[5].weather[0].icon;
    weatherObject.day5rainChance = forecastedWeatherData.daily[5].pop;

    weatherObject.day6temperature = forecastedWeatherData.daily[6].temp.day;
    weatherObject.day6weather = forecastedWeatherData.daily[6].weather[0].main;
    weatherObject.day6weatherIcon = forecastedWeatherData.daily[6].weather[0].icon;
    weatherObject.day6rainChance = forecastedWeatherData.daily[6].pop;
    
    weatherObject.day7temperature = forecastedWeatherData.daily[7].temp.day;
    weatherObject.day7weather = forecastedWeatherData.daily[7].weather[0].main;
    weatherObject.day7weatherIcon = forecastedWeatherData.daily[7].weather[0].icon;
    weatherObject.day7rainChance = forecastedWeatherData.daily[7].pop;

    console.log("Weather object:\n", weatherObject);
    displayWeatherData(weatherObject, locationToDisplay);

}

async function getWeatherDataFromAPI(locationToDisplay) {

    console.log("submitted. Search term:", locationToDisplay);
    loadingGif.src = "loading.gif";
    loadingGif.classList.add("loadingGif");
    outerContainer.appendChild(loadingGif);

    // Get details on CURRENT weather
    try {
        let currentResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locationToDisplay}&APPID=34e4d38b468e06f31319903dfdd2b111&units=metric`,
        {mode: 'cors'});
        let currentWeatherData = await currentResponse.json();

        // Get details on FORECASTED weather
        let forecastedResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeatherData.coord.lat}&lon=${currentWeatherData.coord.lon}&APPID=34e4d38b468e06f31319903dfdd2b111&units=metric`,
        {mode: 'cors'});
        let forecastedWeatherData = await forecastedResponse.json();
        processWeatherData(currentWeatherData, forecastedWeatherData, locationToDisplay);
    }
    catch {
        outerContainer.removeChild(loadingGif);
        alert("We can't find that location - please try again.");
    }
};


form.addEventListener("submit", ( event ) => {
    event.preventDefault();
    let searchTerm = document.querySelector("#location").value;
    if (searchTerm === "" || searchTerm === undefined) {
        return;
    }
    getWeatherDataFromAPI(searchTerm);
    document.querySelector("#location").value = ""; // Reverts searchbar text to placeholder
    document.querySelector("#location").placeholder = "Change location";
});
