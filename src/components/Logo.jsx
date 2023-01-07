import React from "react";
import LogoKasa from "../assets/LOGO.png";


const Logo = () => {
    return (
        <div className="logo">
            <img className="logo-header" src={LogoKasa} alt="Logo Kasa" />
        </div>
    );
};

export default Logo;