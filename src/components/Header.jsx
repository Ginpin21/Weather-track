import { useContext } from "react"
import { appContext } from "./ContextWrapper";
import { FaMoon, FaSun } from "react-icons/fa";
const Header = () => {
  const context = useContext(appContext)
  return (
    <header className="flex z-10 sticky top-0 flex-row justify-between items-center mx-auto p-5 shadow-md shadow-slate-500 bg-white dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-500">
      <h1 className=" text-4xl font-extralight">Weather App</h1> 
      <div className="flex flex-row justify-start ">
        <button className="btn" onClick={()=>context.action.changeDark(!context.dark)}>{context.dark ? <FaSun/> : <FaMoon/>}</button>
        <button className="btn" onClick={()=>context.action.changeCelsius(context.celsius)}>{context.celsius ? "°F" : "°C"}</button>
      </div>
    </header>
  )
}

export default Header
