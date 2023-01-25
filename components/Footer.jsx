

import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaLinkedin, FaGithub, FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import { Button } from './index';

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start items-start">
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">{heading}</h3>
    {items.map((item, index) => (
      <p key={index} className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">{item}</p>
    ))}
  </div>
);

const Footer = () => {

  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [displayMsg,setDisplayMsg] = useState(false);


  const socialMediaLinks = [
    {
      name: "github",
      link: "https://github.com/soloexcel/nftdapp",
      icon: <FaGithub/>,
    },

    {
      name: "twitter",
      link: "https://twitter.com/blockie_chain",
      icon: <FaTwitter/>,
    },

    {
      name: "linkedIn",
      link: "https://www.linkedin.com/in/solomon-lekan-5319a9212/",
      icon: <FaLinkedin/>,
    },

    {
      name: "telegram",
      link: "https://t.me/blockie_chain",
      icon: <FaTelegramPlane/>
    }
      
  ]


  const { theme } = useTheme();



const handleOnChange = (e) => {
  setEmail(e.target.value);
};
  
  

  const isValidEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  const emailValidation = () => {
    if (email === '') {
      setMsg("Please cross check to make sure you are not submitting an empty field.")
    } else if (!isValidEmail(email)) {
      setMsg("Provide a valid email address");
    } else {setMsg("Subscription is successful.");}

    // console.log(msg)
    
    setDisplayMsg(true);
  }


// const emailValidation = () => {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(String(email).toLowerCase())) {
//     console.log("Subscription successful.")
//   } else if (!re.test(String(email)) && email !== "") {
//     console.log("Email not valid");
//   } else {console.log("")};

// }


  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex flex-row mx-auto md:flex-col sm:px-4 px-16">
        
        <div className="flex-1 justify-center items-center flex-wrap ml-10 md:ml-50 md:mt-8">
          <FooterLinks heading="PROWESS" items={['Browse', 'Get Started', 'Contact Us']} />
          {/* <FooterLinks heading="Support" items={['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy']} /> */}
        </div>

        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            {/* <Image src={images.logo02} alt="logo" width={32} height={32} /> */}
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">PROWESS</p>
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">Get the latest updates</p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
            <input type="email" placeholder="Your Email" value={email} onChange = {handleOnChange} className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none" />
            <div className="flex-initial">
              <Button btnName="Subscribe" handleClick = {emailValidation} classStyles="rounded-md" />
            </div>
              
              
              
          </div>
          {/* <p>{msg ? msg : null}</p> */}
          {displayMsg && <p className='mt-6'>{msg}</p>}
        </div>
      </div>
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">PROWESS. All Rights Reserved.</p>
          <div className="flex flex-row sm:mt-4">
            {socialMediaLinks.map((media, idx)  => ( 
              <div key={idx + 1} className="mx-2 cursor-pointer">
              <Link href={{ pathname: `${media.link}` }} className={theme === 'light' ? 'filter invert' : '' }>{media.icon}</Link>
            </div>
          )

            )}
          </div>
          {/* <div className="flex flex-row sm:mt-4">
            {[images.discord, images.twitter, images.telegram].map((image, index) => (
              <div className="mx-2 cursor-pointer" key={index}>
                <Link href="https://twitter.com/blockie_chain">
                    <Image
                      src={image}
                      alt="social"
                      objectFit="contain"
                      width={24}
                      height={24}
                      className={theme === 'light' ? 'filter invert' : ''}
                    />
                </Link>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
