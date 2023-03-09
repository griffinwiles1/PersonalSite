import style from "../style";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className={` mt-auto ${ style.flexCenter } flex-row flex-1 footer bg-footerPrimary`}>
      <div className={`  `}>
        <div className={` ${ style.flexStart } `}>
          <img src={ "" } />
        </div>
        <div>
          <ul className="flex flex-row">
            { footerLinks.map((footer, index) => (
                <li
                  key={ footer.id }
                  className={`w-[100%] px-3 mx-16 flex items-center justify-between font-poppins font-normal text-[18px] text-secondaryWhite
                  cursor-pointer hover:text-footerSecondary `}
                >
                  <a href={` ${ footer.id } `}>{ footer.title }</a>
                </li>
            )) }
          </ul>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer