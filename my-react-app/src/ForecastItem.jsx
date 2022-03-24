export function ForecastItem(props){
    const{weather} = props;
    const {feels, temp, date, time, alt, img} = weather || {};

    return (
    <div className="weather_window twelve">
       <div className="date smalText"><p className="date12">{date}</p></div>
       <div className="time smalText"><p className="time12">{time}</p></div>
       <div className="temperature smalText"><p className="temperature12">Temperature:{temp}°</p></div>
       <div className="feelsLike smalText"><p className="feelsLike12">Feels like:{feels}°</p></div>
       <div className="pictureHeader smalText"><p className="pictureHeader12">{weather.weather}</p></div>
       <div className="picture"><img className="forecastPicture12" src={img} alt={alt}/></div>
   </div>
    )
}