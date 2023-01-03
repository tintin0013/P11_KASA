import React from "react";
import "../styles/components/card.css"

const Card = ({ data }) => {
	return (
		<article className="article">
			<a href={"location/" + data.id}>
				<h3 className="article-h3">{data.title}</h3>
				<img className="article-img" src={data.cover} alt={data.title} />
			</a>
		</article>
	);
};

export default Card;