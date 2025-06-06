import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="pt-8 pb-6 max-sm:py-5 bg-[#F6F0E2]">
            <p className="leading-[100%] text-center pt-8 pb-6 max-lg:py-6 max-md:py-4">
                © Hustlin' Hardos {year}
            </p>
        </div>
    );
};

export default Footer;
