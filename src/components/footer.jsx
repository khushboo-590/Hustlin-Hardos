import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="lg:pt-8 lg:pb-6 pt-4 pb-4  ">
            <p className="leading-[100%] text-center ">
                © Hustlin' Hardos {year}</p>
        </div>
    );
};

export default Footer;
