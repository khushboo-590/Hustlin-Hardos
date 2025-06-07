import React, { useState } from 'react';
import discordIcon from '../assets/images/svg/discord.svg';
import twitterIcon from '../assets/images/svg/twitter.svg';
import instagramIcon from '../assets/images/svg/insta.svg';
import mediumIcon from '../assets/images/svg/m.svg';
import openseaIcon from '../assets/images/svg/ship.svg';
import { navLinks } from '../utils/helper.';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);

    };

    return (
        <div className="py-2 ">
            <div className="container max-xl:px-4 max-w-[1140px] w-full mx-auto">
                <div className="flex w-full justify-end items-center">
                    <div className="max-w-[658px] max-sm:flex w-full">
                        <div className="w-full flex items-center justify-between">
                            <a className="font-modernofb text-2xl max-md:text-xl" href="/">
                                Hustlin' Hardos
                            </a>
                             <div
                                className={`flex gap-5 transition-all duration-300 items-center max-sm:gap-4 ${menuOpen ? 'max-sm:left-0' : 'max-sm:left-full'} max-sm:z-40 max-sm:fixed max-sm:flex-col max-sm:w-full max-sm:h-full max-sm:justify-center max-sm:items-center max-sm:bg-white max-sm:top-0`}>
                                <div className="flex gap-[18px] max-sm:flex-col max-sm:gap-4 items-center"> 
                                    {[discordIcon, twitterIcon, instagramIcon, mediumIcon, openseaIcon].map((icon, index) => (
                                        <a
                                            key={index}
                                            href="/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex size-6 justify-center items-center hover:scale-105 transition duration-300">
                                            <img src={icon} alt="icon" /></a>))}
                                </div>
                                <button
                                    className="px-4 py-2 uppercase text-sm font-semibold border border-black bg-yellow-400 text-black hover:text-white hover:bg-black transition duration-300 cursor-pointer">
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
            <div className="w-full mt-[7px] border-t-2 border-b-2 border-solid border-black">
                <div className="max-w-[561px] mx-auto flex justify-center items-center ">
                    {navLinks.map((obj, index) => (
                        <a
                            key={index}
                            href={`#${obj.link}`}
                            className="px-6 border-x-2 uppercase hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap max-md:text-sm max-sm:text-xs border-black py-[7px] max-sm:py-1 max-sm:px-2  text-black">
                            {obj.title}
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Header;














