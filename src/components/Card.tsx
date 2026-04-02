import { useState } from "react";
import { useLocation } from "react-router";
import "./Card.css";

interface Character {
	name: string;
	affiliations: string[];
	image?: string;
	description?: string;
	height: number;
	mass: number;
}

function Card() {
	const location = useLocation();
	const characters = (location.state as Character[]) || [];

	// choisir UNE fois un personnage aléatoire
	const [character] = useState(() => {
		if (!characters.length) return null;
		const randomIndex = Math.floor(Math.random() * characters.length);
		return characters[randomIndex];
	});

	if (!character) {
		return <p>No character found.</p>;
	}
	const affiliationClass = character.affiliations.includes("Sith")
		? "sith"
		: character.affiliations.includes("Jedi Order")
			? "jedi"
			: "neutral";
	return (
		<section className="card-section">
			<div className={`card-container ${affiliationClass}`}>
				<div className="container-img-info">
					<div className="card-div-img ">
						<img src={character.image} alt={character.name} />
					</div>

					<div className="card-div-info">
						<h2>{character.name}</h2>
						<p>Clan : {affiliationClass}</p>
						<p>Height : {character.height}</p>
						<p>Mass : {character.mass}</p>
					</div>
				</div>

				<div className="card-div-description"></div>
			</div>
		</section>
	);
}

export default Card;
