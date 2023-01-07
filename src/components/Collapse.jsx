import React, { useState } from "react";
import VectorDown from "../assets/VectorDown.png";
import VectorUp from "../assets/VectorUp.png";
import "../styles/components/collapse.css"

const Collapse = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="Collapse">
            <div className="Collapse-header" onClick={toggleExpand}>
                <span>{title}</span>
                <img className="Collapse-Img" src={expanded ? VectorUp : VectorDown} alt="Chevron" />
            </div>
            <div className={expanded ? "Collapse-expanded" : "Collapse-hidden"}>
                {content}
            </div>
        </div>
    );
};

export default Collapse;