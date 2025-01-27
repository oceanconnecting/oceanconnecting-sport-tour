"use client"
import { MdKeyboardArrowUp } from "react-icons/md";
const BackToTopButton = () => {
  const backToTop = () => window.scrollTo({ top: 0 })

  return(
    <div>
      <button className="fixed bottom-0 z-50 right-0 text-xl m-5 p-3 rounded-full border-t shadow-md active:shadow-sm border-primary-600 focus:outline outline-primary-400/50 text-white bg-primary-500 hover:bg-opacity-80 active:bg-primary-300 hover:bg-primary-400 aspect-square transition duration-300" onClick={backToTop}><MdKeyboardArrowUp/></button>
    </div>
  ) 
}

export default BackToTopButton
