import React, { useState, useEffect } from "react";
import nextImg from "../assets/arrow_forward.png";
import prevImg from "../assets/arrow_back.png";
import "../styles/components/slider.css"

const Slider = ({ loc }) => {
    const [index, setIndex] = useState(0);
    const [arrow, setArrow] = useState(false);

    const incrIndex = () => {
        if (index === loc.length - 1) {
            setIndex(0);
        } else {
            setIndex((prevState) => prevState + 1);
        }
    };

    const decrIndex = () => {
        if (index === 0) {
            setIndex(loc.length - 1);
        } else {
            setIndex((prevState) => prevState - 1);
        }
    };

    useEffect(() => {
        if (loc.length !== 1) {
            setArrow(true);
        } else setArrow(false);
    }, [loc.length]);

    return (
        <div className="slider">
            <img className="sliderPic" src={loc[index]} alt="" />
            <img
                className="arrow-prev"
                src={arrow ? prevImg : ""}
                alt=""
                onClick={decrIndex}
            />
            <img
                className="arrow-next"
                src={arrow ? nextImg : ""}
                alt=""
                onClick={incrIndex}
            />
            <div className="nbrPic">{index + 1 + "/" + loc.length}</div>
        </div>
    );
};

export default Slider;
