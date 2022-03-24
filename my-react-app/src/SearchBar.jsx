import { useState } from "react";
import {STORAGE} from './storage.js';

export function SearchBar(props){
    const { getWeather } = props;
    const [userInput, setUserInput] = useState("");
  
    const handleChange = (e) => {
      setUserInput(e.currentTarget.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(e.currentTarget.value);
      getWeather(e.currentTarget.value);
      setUserInput("");
      STORAGE.setLastLocation(e.currentTarget.value);
    };
    
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSubmit(e);
      }
    };
    return(
      <div className="search_form">
      <form onSubmit={handleSubmit}>
    <input id='inp' type="text" placeholder="" onKeyDown={handleKeyPress}  onChange={handleChange} value={userInput}/>
    </form>
    <div className="scopePicture"><img src="./img/scope.svg" /></div>
  </div>
    )  
   }