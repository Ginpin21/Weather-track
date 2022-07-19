import React, { useState } from 'react';

export const appContext = React.createContext(null);

export const ContextWrapper = (props) => {
    const [ text, setText ] = useState('');
    const [weather,setWeather]= useState();
    const [celsius,setCelsius]=useState(()=>{
        if(localStorage.hasOwnProperty("Celsius")){
            return JSON.parse(localStorage.Celsius)
        }
        else{
            localStorage.setItem("Celsius",true)
            return true
        }
    });
    const [dark,setDark]=useState(()=>{
        if(localStorage.hasOwnProperty("Dark")){
            return JSON.parse(localStorage.Dark)
        }
        else{
            localStorage.setItem("Dark",true)
            return true
        }
    })
    const [action,setAction] = useState({
        changeWeather:weather=>setWeather(weather),
        changeText:text=>setText(text),
        changeCelsius:(celsius)=>{
            localStorage.setItem("Celsius",!celsius)
            setCelsius(!celsius)
        },
        changeDark:(bool)=>{
            localStorage.setItem("Dark",bool)
            setDark(bool)      
        }
    })
    return (
        <appContext.Provider value={{ text,weather,dark,celsius,action}}>
            {props.children}
        </appContext.Provider>
    );
}