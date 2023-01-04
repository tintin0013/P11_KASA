import React, { useState } from "react";
import VectorDown from "../assets/VectorDown.png";
import VectorUp from "../assets/VectorUp.png";
import "../styles/components/dropMenu.css"

const DropMenu = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="dropmenu">
            <div className="dropheader" onClick={toggleExpand}>
                <span>{title}</span>
                <img className="dropImg" src={expanded ? VectorUp : VectorDown} alt="Chevron" />
            </div>
            <div className={expanded ? "dropmenu-expanded" : "dropmenu-hidden"}>
                {content}
            </div>
        </div>
    );
};

export default DropMenu;