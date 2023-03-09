import { useState } from "react"
import styles from "../style"
import { close } from "../assets"

const Header = () => {
  const [hideHeader, setHideHeader] = useState(true)
  const onClick = () => setHideHeader(true)
  
  return (
    <div className={` w-full h-[64px] bg-primaryDark z-0
      ${ !hideHeader ? styles.flexCenter : "hidden" }
    `}>
      <div className={`  ${ styles.flexCenter } headerAlert `}>
        <h2 className="p-3">
          Site still under construction
        </h2>
        <div className="relative right-[5px] bottom-[12px]">
          <img src={ close }
            className="w-[12px] h-[12px] cursor-pointer" 
            onClick={ onClick }
          />
        </div>
      </div>
    </div>
  )
}

export default Header