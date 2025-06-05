import React, { useState } from 'react';
// import discordIcon from '../assets/images/svg/discord.svg';
// import twitterIcon from '../assets/images/svg/twitter.svg';
// import instagramIcon from '../assets/images/svg/instagram.svg';
// import mediumIcon from '../assets/images/svg/m.svg';
// import openseaIcon from '../assets/images/svg/ship.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="py-2">
            <div className="container max-xl:px-4 max-w-[1140px] w-full mx-auto">
                <div className="flex w-full justify-end items-center">
                    <div className="max-w-[658px] max-sm:flex w-full">
                        <div className="w-full flex items-center justify-between">
                            <a className="ff-moderfb text-2xl max-md:text-xl" href="/">
                                Hustlin' Hardos
                            </a>
                            <div
                                className={`flex gap-5 transition-all duration-300 items-center max-sm:gap-4 
                  ${menuOpen ? 'max-sm:left-0' : 'max-sm:left-full'}
                  max-sm:z-40 max-sm:fixed max-sm:flex-col max-sm:w-full max-sm:h-full max-sm:justify-center max-sm:items-center max-sm:bg-white max-sm:top-0`}
                            >
                                {/* <div className="flex gap-[18px] max-sm:flex-col max-sm:gap-4 items-center">
                                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"
                                        className="flex size-6 justify-center items-center hover:scale-105 transition-all duration-300">
                                        <img src={discordIcon} alt="discord" />
                                    </a>
                                    <a href="https://x.com/HustlinHardos" target="_blank" rel="noopener noreferrer"
                                        className="flex size-6 justify-center items-center hover:scale-105 transition-all duration-300">
                                        <img src={twitterIcon} alt="twitter" />
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                                        className="flex size-6 justify-center items-center hover:scale-105 transition-all duration-300">
                                        <img src={instagramIcon} alt="instagram" />
                                    </a>
                                    <a href="https://medium.com/" target="_blank" rel="noopener noreferrer"
                                        className="flex size-6 justify-center items-center hover:scale-105 transition-all duration-300">
                                        <img src={mediumIcon} alt="medium" />
                                    </a>
                                    <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer"
                                        className="flex size-6 justify-center items-center hover:scale-105 transition-all duration-300">
                                        <img src={openseaIcon} alt="opensea" />
                                    </a>
                                </div> */}
                                <button
                                    onClick={handleClick}
                                    className="py-[9.5px] px-[14.5px] box-border uppercase text-sm cursor-pointer transition-all hover:text-white duration-700 hover:shadow-[170px_0_0_0_#000_inset] font-semibold border-2 border-black bg-yellow text-black"
                                >
                                    Connect Wallet
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={handleClick}
                            className="sm:hidden relative z-50 overflow-hidden w-8 h-6 flex justify-between flex-col"
                        >
                            <span
                                id="toggle-line-1"
                                className="flex w-8 bg-black h-1 transition-all duration-300 rounded-md"
                            ></span>
                            <span
                                id="toggle-line-2"
                                className="flex w-8 bg-black h-1 transition-all duration-300 rounded-md relative after:absolute after:w-full after:rounded-md after:h-full after:left-0 after:top-0 after:bg-black after:transition-all after:duration-300"
                            ></span>
                            <span
                                id="toggle-line-3"
                                className="flex w-8 bg-black h-1 transition-all duration-300 rounded-md"
                            ></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* <div className="w-full mt-[7px] border-t-2 border-b-2 border-solid border-black">
                <div className="max-w-[561px] justify-center items-center flex mx-auto">
                    {['about', 'minting', 'roadmap', 'team', 'faq'].map((link, i) => (
                        <a
                            key={i}
                            className="px-6 border-x-2 uppercase hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap max-md:text-sm max-sm:text-xs border-solid py-[7px] max-sm:py-1 max-sm:px-2 border-black"
                            href={`#${link}`}
                        >
                            {link === 'faq' ? 'FAQs' : link.charAt(0).toUpperCase() + link.slice(1)}
                        </a>
                    ))}
                </div>
            </div> */}
        </header>
    );
};

export default Header;
