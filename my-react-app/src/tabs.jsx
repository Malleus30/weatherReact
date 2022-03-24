export function Tabs(props){
    const toggleTab = props.toggleTab;

    return(
     <div className="buttons">
         <div className="now button  smalText" onClick={()=> toggleTab(1)}>
            <p className="nowP" >Now</p>
        </div>
        <div className="button details smalText" onClick={()=> toggleTab(2)}>
            <p className="detailsP">Details</p>
          </div>
        <div className="button forecast smalText" onClick={()=> toggleTab(3)}>
            <p className="forecastP">Forecast</p>
        </div>
     </div>
    )
}