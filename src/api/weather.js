import axios from 'axios';

const CONDITION_BASE_URL="https://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/";
const FORECAST_BASE_URL="https://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/";

export function fetchCondition(city){
    return axios.get(`${CONDITION_BASE_URL}${city}.json`)
    .then(response => response.data.current_observation)
}

export function fetchForecast(city){
    return axios.get(`${FORECAST_BASE_URL}${city}.json`)
    .then(response => response.data.forecast.simpleforecast.forecastday)
}


// const conditionXHR = new XMLHttpRequest();
// const forecastXHR = new XMLHttpRequest();

// export function fetchCondition(city, onLoad) {
//     conditionXHR.open('GET', `${CONDITION_BASE_URL}${city}.json`);
//     conditionXHR.send();
//     conditionXHR.onload = () => {
//         if (conditionXHR.status === 200) {
//             console.log(conditionXHR.responseText);
//             const dataObj = JSON.parse(conditionXHR.responseText);
//             onLoad(dataObj.current_observation);
//         }
//     }
// }

// export function fetchForecast(city, onLoad) {
//     forecastXHR.open('GET', `${FORECAST_BASE_URL}${city}.json`);
//     forecastXHR.send();
//     forecastXHR.onload = () => {
//         if (forecastXHR.status === 200) {
//             console.log(forecastXHR.responseText);
//             const dataObj = JSON.parse(forecastXHR.responseText);
//             onLoad(dataObj.forecast.simpleforecast.forecastday);
//         }
//     }
// }