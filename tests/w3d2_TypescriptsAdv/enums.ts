enum weatherNames{
Sunny="sunny",
Rainy='rain',
Fog='fog',
windy='wind',
cloudy='cloudy',
heavyRain='HeavyRain'

}

let days:string[]=[weatherNames.Fog,weatherNames.Rainy,weatherNames.cloudy,weatherNames.heavyRain,
weatherNames.heavyRain];
getWeatherForWeek(days);

function getWeatherForWeek(dayName:Array<String>){

for(let i=0;i<dayName.length;i++){

    console.log(`day: ${i+1} `+dayName[i])
}

}