import styles from "../style";
import { bike, flowers, fall } from "../assets";
import Featured from "../components/featured";

const index = () => {
  return (
    <div className="">
      <div className={` navbarShadow xl:h-[720px] lg:h-[520px] md:h-[480px] sm:h-[360px] xs:h-[320px] ${ styles.flexCenter } `}>
        <img className="w-full z-[-10] flex sm:hidden" src={ fall } />
        <img className="w-full z-[-10] sm:flex lg:hidden hidden" src={ flowers } />
        <img className="w-full z-[-10] lg:flex hidden" src={ bike } />
      </div>
      <div className="">
        <div className={` ${ styles.flexCenter } sm:flex-row flex-col`}>
          <Featured />
        </div>
      </div>
    </div>
  )
}

export default index