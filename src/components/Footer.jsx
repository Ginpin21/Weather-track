import {FaEnvelope} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className=" sticky bottom-0 z-10 flex flex-col items-center container p-1 text-xl font-extralight bg-white shadow-slate-500 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-200  shadow-inner">
      <h1>Web app created by Iftakhar Ahmed</h1>
      <a href="mailto:iftekharahmed2003@gmail.com" className="hover:scale-110 hover:font-medium transition-all"><FaEnvelope className='inline mr-2'/>iftekharahmed2003@gmail.com</a>
    </footer>
  )
}

export default Footer
