import React from 'react';
import Style from "../components/Banner.module.css";

const Banner = ({ name, childStyles, parentStyles }) => (
  <div className={`relative w-full flex flex-col items-center z-0 overflow-hidden nft-gradient ${parentStyles}`}>
    <p className={`font-bold text-white text-5xl font font-poppins leadinfg-70 ${childStyles}`}>{name}</p>
    {/* <h1 className = {Style.h1}>
        Discover, <span className={Style.underlined + ' ' + Style.underlineClip}>Sell</span><br />& Collect <span className={Style.underlined + ' ' + Style.underlineMask}>Rare</span><br /><span className={Style.underlined  + ' ' + Style.underlineOverflow}>NFTs</span>
    </h1>

    <h2 className={Style.heroTxt + ' ' + Style.h2}>
        Welcome to prowess NFT Marketplace!, we offer a wide <span className={Style.wrap}>selection of unique and one-of-a-kind NFTs for you to browse and purchase.</span>
    </h2> */}
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg -top-9 -left-16 -z-5" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full white-bg -bottom-24 -right-14 -z-5" />
  </div>
);

export default Banner;
