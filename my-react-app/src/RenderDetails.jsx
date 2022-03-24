export function RenderDetails(props){
    const cityName = props.cityName;
    const temp = props.temp;
    const feels = props.feels;
    const weather = props.weather;
    const sunrise = props.sunrise;
    const sunset = props.sunset;
    const toggleState = props.toggleState;
    return(
    <div className={toggleState === 3 ? "active-page" : "page"}>
        <div className="display_left" id='showDetails'>
        <p className="text showDetailsHeader">{cityName}</p>
        <p className="text detailsTemp">Temperature: {temp}°</p>
        <p className="text detailsFeels">Feels like: {feels}°</p>
        <p className="text detailsWeather">Weather: {weather}</p>
        <p className="text detailsSunrise">Sunrise: {sunrise}</p>
        <p className="text detailsSunset">Sunset: {sunset}</p>
       </div>
    </div>
    )
}