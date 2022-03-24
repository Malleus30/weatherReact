import {ForecastItem} from "./ForecastItem"

export function RenderForecast(props){
 const {weather} = props;
 const toggleState = props.toggleState;

 return(
     <div className={toggleState === 2 ? "active-page" : "page"}>
       <div className="display_left" id='showForecast'>
         <p className="text forecastHeader">{weather.city}</p>
         {weather?.forecast?.map((item, index) =>(
             <ForecastItem key={index} weather={item} />
         ))}
       </div>     
     </div>
 )
}