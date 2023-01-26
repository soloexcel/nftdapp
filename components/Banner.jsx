import React from 'react';
import Image from 'next/image';
import Style from "./Banner.module.css"
import images from '../assets';
// import Typed from 'react-typed';
// import 'react-typed/dist/animatedCursor.css';

const Banner = () => {
  return (
    <div className={Style.home_section + `relative w-full z-0 overflow-hidden nft-gradient`}>
        <div className={Style.ellipse}></div>
        <div className={Style.container}>
            <div className={Style.heroContent}>
                <h1>
                    Discover, <span className={Style.underlined + ' ' + Style.underlineClip}>Sell</span><br />& Collect <span className={Style.underlined + ' ' + Style.underlineMask}>Rare</span><br /><span className={Style.underlined  + ' ' + Style.underlineOverflow}>NFTs</span>
                </h1>   
            </div>
            <div className={Style.img}>
                <Image className={Style.heroImg} src={images.heroCat} alt='heroImg'
                width={500} height={500}/>
            </div>
        </div>
            {/* displaying advert text  */}
            {/* {typed} */}
    </div>
  )
}

export default Banner
