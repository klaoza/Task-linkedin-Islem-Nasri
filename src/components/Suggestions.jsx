import React, { useState } from "react";
import './Suggestions.css';

function Suggestions() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="Sugg">
            <div className="heading-container">
                <h2>Trouvez votre travail ou votre stage idéal</h2>
            </div>
            <div className="choices">
                <a className="suggestions-link">SUGGESTIONS DE RECHERCHES</a>
                <br />
                <div className="button-container">
                    <button >Ingénierie</button>
                    <button >Développement Commercial</button>
                    <button >Finance</button>
                    <button >Adjoint administratif</button>
                    <button >Vendeur</button>
                    <button >Services clients</button>
                    {showMore && (
                        <>
                            <button >Services de la santé</button>
                            <button >Ventes</button>
                            <button>Gestion de projets et de programmes</button>
                            <button>Comptabilité</button>
                            <button>Arts et design</button>
                            <button>Services à la communauté et Services sociaux</button>
                            <button>Consulting</button>
                            <button>Formation</button>
                            <button>Entrepreneuriat</button>
                            <button>Service juridique</button>
                            <button>Médias et communications</button>
                            <button>Armée et services de protection</button>
                            <button>Gestion produit</button>

                        </>
                    )}
                    <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Voir Moins" : "Voir Plus"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Suggestions;


