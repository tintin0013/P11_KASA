import React from "react";
import bannerAbout from "../assets/about_kasa-bg.png";

const BannerAbout = () => {
    return (
        <div className="bannerAbout">
            <img className="banner_about_img" src={bannerAbout} alt="Banniere à propos" />
        </div>
    );
};

export default BannerAbout;