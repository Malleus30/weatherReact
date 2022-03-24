import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {UI} from './view.js';
import { FORECAST_UI } from './view.js';
import {STORAGE} from './storage.js';
import { SearchBar } from "./SearchBar"
import {getWeather} from "./api.js"
import {RenderNow} from "./RenderNow"
import {RenderDetails} from "./RenderDetails"
import {RenderForecast} from "./RenderForecast";
import {FavoritePlaces} from "./FavoritePlaces";
import {RemoveElement}  from "./RemoveElement";
import {Tabs} from "./tabs";
  


function App(){
  
  const [weather, setWeather] = useState({});
  
  const [favorites, setFavorites] = useState(
    new Set( STORAGE.getFavoredFromStorage() || [])
  );

  const [toggleState, setToggleState] = useState(1);

  
async function searchWeather(city){
  getWeather(city).then(setWeather);
}
function isFavorite(city) {
  return favorites.has(city);
}

function changeFavorite(city) {
  const list = new Set(favorites);
  list.delete(city);
  setFavorites(isFavorite(city) ? list : new Set(favorites).add(city));
}

function addFavoriteCity(city){
  const  set = new Set(STORAGE.getFavoredFromStorage()) || new Set();
  const cityName = STORAGE.getLastlocation();
  set.add(cityName);
  STORAGE.setFavoredToStorage([...set]);
  setFavorites(set);
}

function deleteFromFavorites(city){
  const set = new Set(STORAGE.getFavoredFromStorage());
  set.delete(city);
  STORAGE.setFavoredToStorage([...set]);
  setFavorites(set);
}
  

  return(
    <div className="form">
         
        <div className="inner_part">
            <SearchBar getWeather={searchWeather}/>
        <div className="content">

            <div className="left_part">

                
                        
                            {console.log(weather)}
                            <RenderNow
                             weather={weather}
                             liked={isFavorite(weather.city)}
                             onLike={addFavoriteCity}
                             toggleState={toggleState}
                              />

                
                        <RenderDetails 
                        temp={weather.temp}
                        cityName={weather.city}
                        feels={weather.feels}
                        weather={weather.weather}
                        sunrise={weather.sunrise}
                        sunset={weather.sunset}
                        toggleState={toggleState}
                        />

                 
                        <RenderForecast 
                        weather={weather}
                        toggleState={toggleState}
                        />
              
                  <Tabs  toggleTab={setToggleState}/>
            </div>


            <div className="right_part">
                
                <div className="right_header">
                    <p className="text right_headerText">Added Locations</p>
                </div>
                <div className="display_right">
                <FavoritePlaces  list={[...favorites.values()].map((city, index) => (
                <RemoveElement
                  key={index}
                  value={city}
                  onOpen={searchWeather}
                  onClose={deleteFromFavorites}
                />
              ))}/>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default App


