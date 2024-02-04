var weatherNames;
(function (weatherNames) {
    weatherNames["Sunny"] = "sunny";
    weatherNames["Rainy"] = "rain";
    weatherNames["Fog"] = "fog";
    weatherNames["windy"] = "wind";
    weatherNames["cloudy"] = "cloudy";
    weatherNames["heavyRain"] = "HeavyRain";
})(weatherNames || (weatherNames = {}));
var days = [weatherNames.Fog, weatherNames.Rainy, weatherNames.cloudy, weatherNames.heavyRain,
    weatherNames.heavyRain];
getWeatherForWeek(days);
function getWeatherForWeek(dayName) {
    for (var i = 0; i < dayName.length; i++) {
        console.log("day: ".concat(i + 1, " ") + dayName[i]);
    }
}
