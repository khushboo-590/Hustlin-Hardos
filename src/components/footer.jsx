import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="pt-8 pb-6 max-sm:py-5">
            <p className="text-center leading-[100%]">
                © Hustlin' Hardos <span>{year}</span>
            </p>
        </div>
    );
};

export default Footer;
