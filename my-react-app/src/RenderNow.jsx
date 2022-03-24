export function RenderNow(props){
  const { weather, onLike, active, liked } = props;
  const { imgBig, alt, temp, city } = weather || {};
  const toggleState = props.toggleState;
    return (
     <div className={toggleState === 1 ? "active-page" : "page"}>
      <div className="display_left" id='showNow'>
       <div className="forPosition">
        <div className="temp"><p className='bigNumber'>{temp}</p></div>
        <div className="bigCloudPicture"><img className='bigCloudIcon' src={imgBig} alt={alt} /></div>
        <div className="cityName"><p className="text smalSityName"></p>{city}</div>
        <div onClick={ () => onLike(city)} className="heart_picture"><img src="./img/heart.svg" alt="heart" /></div>
      </div>
      </div>
     </div> 
    )
}