import { useEffect,useContext } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import WeatherForecast from "./components/WeatherForecast";
import Footer from "./components/Footer";
import {appContext } from "./components/ContextWrapper";

function App() {
  const context = useContext(appContext)
  const weatherApi= async(loc)=>{
    const key= "49369af77cdd4e388c514012223006"
    const url= `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${loc}&days=7&aqi=no&alert=no` 
    const res = await fetch(url) 
    if (!res.ok) {
      const errorData = await res.json()
      return errorData
    }
    else{
      const data= await res.json()
      return data
    }
  } 
  useEffect(()=>{
    if(localStorage.hasOwnProperty("Dark")===false){
      if(window.matchMedia('(prefers-color-scheme:dark)').matches){
        context.action.changeDark(true);
      }
      else{
        context.action.changeDark(false);
      }
    }

  },[context.action])

  useEffect(()=>{
    if(context.dark){
      document.querySelector("body").classList.add("dark")
    }
    else{
      document.querySelector("body").classList.remove("dark")
    }
  },[context.dark])

  return (
    <>
        <Header/>
        <div className={`w-full md:flex-row ${!context.weather ? "min-h-screen items-center md:justify-center " : "items-center justify-center"} md:items-stretch font-extralight flex flex-col p-5 dark:bg-slate-800 dark:text-slate-200` }>
          <WeatherCard weatherApi={weatherApi}/>
          <WeatherForecast/>
        </div>
        <Footer/>
    </>
  );
}

export default App;

