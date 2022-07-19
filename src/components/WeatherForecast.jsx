import { useContext } from "react"
import { appContext } from "./ContextWrapper";
import { FaTemperatureHigh,FaTemperatureLow } from "react-icons/fa";
const WeatherForecast = ({foreCastApi}) => {
const context = useContext(appContext)
  return (
    <>
    {context.weather && <ul className="md:w-half w-full p-5 my-5 rounded-md shadow dark:shadow-slate-200 shadow-slate-500">
      <h1 className="text-center text-4xl my-3">{"Weather Forecast for "+context.weather.location.name}</h1>
      {context.weather.forecast.forecastday.map(day=>
          <li key={day.date} className="grid dark:bg-slate-800 bg-slate-50 rounded-md grid-cols-6 gap-0 mb-2 p-4 shadow dark:shadow-slate-200 shadow-slate-500 hover:scale-105 md:hover:m-3 md:hover:font-normal transition-all ease-in-out">
            <h2 className="md:text-5xl text-2xl col-span-2">{context.celsius?day.day.avgtemp_c+"°C":day.day.avgtemp_f+"°F"}</h2>
            <h2 className="md:text-2xl text-xl col-span-2">Max <FaTemperatureHigh className="inline"/>  {context.celsius?day.day.maxtemp_c+"°C":day.day.maxtemp_f+"°F"}</h2>
            <h2 className="md:text-2xl  text-xl col-span-2 justify-self-end">Min   <FaTemperatureLow className="inline"/> {context.celsius?day.day.mintemp_c+"°C":day.day.mintemp_f+"°F"}</h2>
            <div className="flex flex-row col-span-3 items-center">
              <h2 className="md:text-xl text-lg">{day.day.condition.text}</h2>
              <img className="mx-2 h-10 md:h-12" src={day.day.condition.icon} alt="" />
            </div>
            <h2 className="md:text-xl text-lg col-span-3 justify-self-end self-center">{day.date}</h2>
         </li>)}
    </ul>}
    </>        
  )
  
}

export default WeatherForecast
