import React, { useState } from "react";
import VectorDown from "../assets/VectorDown.png";
import VectorUp from "../assets/VectorUp.png";

const CollapseLi = ({ title, content }) => {
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
                {content.map((item) => {
                    return <li key={"key_" + item}>{item}</li>;
                })}
            </div>
        </div>
    );
};

export default CollapseLi;