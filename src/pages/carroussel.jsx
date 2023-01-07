import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Rating from "../components/Rating";
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";
import CollapseLi from "../components/CollapseLi";
import "../styles/pages/carroussel.css"

const Carroussel = () => {
    const [loc, setLoc] = useState({
        tags: [],
        equipments: [],
        pictures: [],
        rating: "",
        host: { name: "", picture: "" },
    });
    const { id } = useParams();

    useEffect(() => {
        fetch("../db.json")
            .then((response) => response.json())
            .then((data) => {
                const loca = data.find((item) => item.id === id);
                if (loc.id !== loca.id) {
                    console.log(loca.id)
                    setLoc({ ...loc, ...loca });
                }
            })
            .catch((error) => console.log("err: ", error));
    });

    const nameHost = loc.host.name.split(" ");

    return (
        <div className="location--page">
            <header>
                <Header />
            </header>
            <main className="main-location">
                <Slider key={`slide-${loc.id}`} loc={loc.pictures} />
                <section>
                    <div className="bio-location">
                        <div className="bio-info">
                            <h2 className="h2-location">{loc.title}</h2>
                            <p className="p-location">{loc.location}</p>
                        </div>
                        <div className="bio-host">
                            <div className="bio-name">
                                <p className="p-bio-name">{nameHost[0]}</p>
                                <p className="p-bio-name">{nameHost[1]}</p>
                            </div>

                            <img className="img-bio" src={loc.host.picture} alt="Profil de l'hôte" />
                        </div>
                    </div>
                    <div className="bio-tag-ratings">
                        <ul className="ul-bio-tag">
                            {loc.tags.map((tags) => (
                                <li className="li-bio-tag" key={loc.id + `/` + tags}>{tags}</li>
                            ))}
                        </ul>
                        <div>
                            <Rating rating={loc.rating} />
                        </div>
                    </div>
                    <div className="location-Collapse">
                        <div className="location-Collapse-header">
                            <Collapse title="Description" content={loc.description} />
                        </div>
                        <div className="location-Collapse-header">
                            <CollapseLi title="Equipements" content={loc.equipments} />
                        </div>
                    </div>
                </section>
                <footer>
                    <Footer />
                </footer>
            </main>
        </div>
    );
};

export default Carroussel;
