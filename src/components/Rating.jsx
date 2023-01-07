import React from "react";
import activeStar from "../assets/activeStar.svg";
import greyStar from "../assets/greyStar.svg";

const Rating = ({ rating }) => {
    const stars = [];
    const ratings = rating;

    for (let i = 0; i < 5; i++) {
        if (i < ratings)
            stars.push(<img className="stars--rating" src={activeStar} alt="full-star" key={i} />);
        else stars.push(<img className="stars--rating" src={greyStar} alt="empty-star" key={i} />);
    }

    return <div className="stars--rating">{stars}</div>;
};

export default Rating;