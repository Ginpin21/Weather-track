import { useContext } from "react";
import {FaSearch} from 'react-icons/fa'
import { appContext } from "./ContextWrapper";

const WeatherCard = ({ weatherApi }) => {
  const context = useContext(appContext)
  const api=()=>{
    if(context.text){
      const fetchData = async()=>{
        const fetchedData= await weatherApi(context.text)
        if(fetchedData.error){
          alert(fetchedData.error.message)
        }
        else{
          context.action.changeWeather(fetchedData)
        }     
      }
      fetchData()  
    }
  }

  return (
    <div className="md:w-half w-full m-5 p-5 shadow dark:shadow-slate-200 shadow-slate-500 rounded-md flex flex-col justify-center items-center">
      <form action="" className="container"
      onSubmit={(e)=>{
        e.preventDefault()
        api()
        context.action.changeText('')
        }}>
        <div 
        className={context.weather ? "flex justify-center items-center shadow shadow-slate-500 max-w-full my-5 px-5 py-1 rounded-lg"
      : "flex animate-pulse focus-within:animate-none justify-center items-center shadow shadow-slate-500 max-w-full my-5 px-5 py-1 rounded-lg"}>
            <input type="text" value={context.text} onChange={(e)=>context.action.changeText(e.currentTarget.value)}
             className="dark:bg-slate-800 focus:outline-none w-full mx-1" placeholder="Search for a city...." />
            <button type="submit"> <FaSearch/> </button>
        </div>
      </form>
      {context.weather &&  <div className={context.weather.current.is_day? "p-5 grid grid-cols-6 gap-2 w-full bg-gradient-to-l from-slate-500 to-cyan-500  rounded-lg text-slate-200":
    "p-5 grid grid-cols-6 gap-2 w-full bg-gradient-to-l from-slate-500 to-black  rounded-lg text-slate-200"}> 
          <h2 className='text-7xl col-span-3 row-start-1'>{context.celsius? context.weather.current.temp_c + "°C":context.weather.current.temp_f + "°F"}</h2>           
          <div className="md:col-span-3 md:row-start-1  md:items-end  md:font-extralight max-w-full flex flex-col col-span-full row-start-4 font-normal">
            <h2 className='md:text-2xl text-1xl'>{"Humidity: "+context.weather.current.humidity+"%"}</h2>
            <h2 className='md:text-2xl text-1xl'>{"Pressure: "+context.weather.current.pressure_mb+" mbar"}</h2>
            <h2 className='md:text-2xl text-1xl'>{"UV Index: "+context.weather.current.uv+" out of 10"}</h2>
            <h2 className='md:text-2xl text-1xl'>{context.celsius? "Precipitation: "+context.weather.current.precip_mm+" mm":"Precipitation: "+context.weather.current.precip_in+" inches"}</h2>
            <h2 className='md:text-2xl text-1xl'>{context.celsius? "Visibility: "+context.weather.current.vis_km+" km": "Visibility: "+context.weather.current.vis_miles+" miles"}</h2>
          </div>
          <h2 className='md:row-start-2 text-3xl col-span-full'>{context.celsius ? "Feels like "+context.weather.current.feelslike_c + "°C ": "Feels like "+context.weather.current.feelslike_f + "°F"}</h2>
          <div className="max-w-full col-span-3 flex flex-row items-center">
            <img className="h-14" src={context.weather.current.condition.icon} alt="Weather Condition Logo"/>
            <p className='md:text-2xl text-1xl'>{context.weather.current.condition.text}</p>
          </div>
          <div className="max-w-full col-span-6 flex flex-row items-center justify-start">
            <img className="h-8 mr-2" src={`https://countryflagsapi.com/png/${context.weather.location.country}`} alt="Country flag" />
            <h3 className='md:text-2xl text-1xl'>{context.weather.location.name.replace(/[^a-zA-Z0-9 ]/g, '')+", "+context.weather.location.country}</h3>   
          </div>  
        </div>}
    </div>
  )
}

export default WeatherCard
