import React, { useState } from 'react';
import { navLinks, socialLinks } from '../utils/helper.';
socialLinks
import logo from '../assets/images/svg/logo.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);

    };

    return (
        <div className="pt-2 ">
            <div className="container max-xl:px-4 max-w-[1140px] w-full mx-auto">
                <div className="flex w-full justify-end items-center">
                    <div className="max-w-[658px] max-sm:flex w-full">
                        <div className="w-full flex items-center justify-between">
                            <a  href="/">
                                <img src={ logo}/> 
                            </a>
                             <div
                                className={`flex gap-5 transition-all duration-300 items-center max-sm:gap-4 ${menuOpen ? 'max-sm:left-0' : 'max-sm:left-full'} max-sm:z-40 max-sm:fixed max-sm:flex-col max-sm:w-full max-sm:h-full max-sm:justify-center max-sm:items-center max-sm:bg-white max-sm:top-0`}>
                                <div className="flex gap-[18px] max-sm:flex-col max-sm:gap-4 items-center"> 
                                    {socialLinks.map((obj, index) => (
                                        <a
                                            key={index}
                                            href={obj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-center items-center hover:scale-105 transition duration-300">
                                            <img src={obj.icon} alt="links" />
                                        </a>
                                    ))}

                                </div>
                                <button
                                    className="px-4 py-2 uppercase text-sm font-semibold border-2 border-black bg-yellow-400 text-black hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                                    Connect Wallet
                                </button>
                            </div>
                        </div>
                        <div onClick={handleClick} className="sm:hidden cursor-pointer z-50 flex flex-col gap-1">
                            <span className={`bg-black block w-6 h-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
                            ></span>
                            <span className={`block w-6 h-1 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                            ></span>
                            <span className={`block w-6 h-1 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
                <div className="w-full mt-[15px] border-t-2 border-b-2 border-solid border-black">
                    <div className="max-w-[561px] justify-center items-center flex mx-auto">
                        {navLinks.map((obj, index) => (
                            <a key={index} className={`px-6 uppercase hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap max-md:text-sm max-sm:text-xs border-solid py-[7px] max-sm:py-1 max-sm:px-2 border-black ${index === 0 ? 'border-x-2' : 'border-r-2'}`}
                                href={`#${obj.link}`}> {obj.title}
                            </a>
                        ))}</div>
                </div>
            </div>
    );
};

export default Header;














