import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Home = () => {
	return (
		<div>
			<header className="header--home">
				<Header />
				<Banner />
			</header>
			
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;