import {STORAGE} from"./storage.js"
import { format } from 'date-fns'
  
 function toCelcius(temperature) {
  return Math.round(temperature - 273);
}

 function convertDate(milisec) {
  if (!milisec) return {};

  const date = new Date(milisec * 1000);

  return {
    time: format(date, "HH:mm"),
    date: format(date, "dd LLL"),
  };
}

  export const URLS ={
    ICON: "https://openweathermap.org/img/wn",
    SERVER_URL: 'https://api.openweathermap.org/data/2.5/weather',                                      
    API_KEY :'d54171d8f8672f7f9694fda045ed8d16',
    FORECAST_SERVER_URL :'https://api.openweathermap.org/data/2.5/forecast'
  }
  
  async function fetchRequest(url){
    return fetch(url)
     .then((response) => {
       return  response.json();
     })
     .catch(error => alert(error.message))
  }


  export async function getWeather(cityName){

    const url = `${URLS.SERVER_URL}?q=${cityName}&appid=${URLS.API_KEY}`;
    
    const forecastUrl = `${URLS.FORECAST_SERVER_URL}?q=${cityName}&appid=${URLS.API_KEY}`;
 
   const data = await fetchRequest(url).then( 
     simplifyWeatherData
   ) 
  
    data.forecast = await fetchRequest(forecastUrl).then( res => {
       return res.list.map(simplifyWeatherData)
        }  
   ) 

   data.status = "ok";
   return data;
  }

  function simplifyWeatherData(data) {
    const { dt, dt_txt, main, weather, sys, name } = data;
  
    return {
      date: convertDate(dt).date,
      time: dt_txt ? dt_txt.slice(-8, -3) : undefined,
      temp: toCelcius(main.temp),
      feels: toCelcius(main.feels_like),
      weather: weather[0].main,
      imgBig:`${URLS.ICON}/${weather[0].icon.slice(0, 2)}n@4x.png`,
      img: `${URLS.ICON}/${weather[0].icon}.png`,
      city: name,
      sunrise: convertDate(sys.sunrise).time,
      sunset: convertDate(sys.sunset).time,
      alt: weather[0].description,
    };
  }
