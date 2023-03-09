import { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import styles from "../style";

const Featured = () => {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    const query = '*[_type == "featured"]';
  
    client.fetch(query).then((data) => setFeatured(data))
  }, []);
  
  return (
    <div className={` ${ styles.flexCenter } `}>
      <ul className="flex lg:flex-row flex-col justify-start">
        { featured.map((featured) => (
          <li key={ featured.title } className="m-5 flex flex-col">
            <div className="max-w-[640px] h-auto z-0 border-[16px] border-solid border-primaryDark rounded-t-lg bg-primaryDark">
              <img src={ urlFor(featured.imgUrl) } alt={ featured.title } className="object-fill rounded-md" />
            </div>
            <div className={` ${ styles.flexCenter } darkFooterGradient `}>
              <h2 className="pt-2 text-[24px] text-primaryWhite font-bold">
                { featured.title }
              </h2>

            </div>
            <div className="border-[16px] border-solid border-footerPrimary rounded-b-lg bg-footerPrimary">
              <p className="p-2 rounded-md bg-footerSecondary">
                { featured.description }
              </p>
            </div>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default Featured