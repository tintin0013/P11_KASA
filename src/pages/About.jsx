import React from "react";
import BannerAbout from "../components/BannerAbout";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/pages/about.css"

const About = () => {
    return (
        <div>
            <header className="header--about">
                <Header />
                <BannerAbout />
            </header>
            <main className="main-about">
                <Collapse
                    title={"Fiabilité"}
                    content={
                        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                    }
                ></Collapse>
                <Collapse
                    title={"Respect"}
                    content={
                        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    }
                ></Collapse>
                <Collapse
                    title={"Service"}
                    content={
                        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    }
                ></Collapse>
                <Collapse
                    title={"Sécurité"}
                    content={
                        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    }
                ></Collapse>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default About;