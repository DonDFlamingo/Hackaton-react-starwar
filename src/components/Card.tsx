import "./Card.css";
import { useEffect, useState } from "react";

type CharacterProps = {
	character: {
		name: string;
		affiliations: string[];
		image?: string;
		description?: string;
		height?: number;
		mass?: number;
		eyeColor?: string;
		hairColor?: string;
		gender?: string;
		species?: string;
		skinColor?: string;
		homeworld?: string;
	};
};

function Card({ character }: CharacterProps) {
	const affiliationClass = character.affiliations.includes("Sith")
		? "sith"
		: character.affiliations.includes("Jedi Order")
			? "jedi"
			: "neutral";
	const [number, setNumber] = useState(0);
	useEffect(() => {
		setNumber(Math.floor(Math.random() * (30000 - 1000 + 1)) + 10000);
	}, []);
	return (
		<section className="card-section">
			<div className={`card-container ${affiliationClass}`}>
				<div className="container-img-info">
					<div className="card-div-img ">
						<img src={character.image} alt={character.name} />
					</div>

					<div className="card-div-info">
						<h2>$ {number} </h2>
						<h2>{character.name}</h2>
						<p>Clan : {affiliationClass.toUpperCase()}</p>
					</div>
				</div>
				<hr />
				<div className={`card-div-description ${affiliationClass}`}>
					<h3>DESCRIPTION :</h3>
					<p>{character.height} m </p>
					<p>{character.mass} kg</p>
					<p>{character.eyeColor?.toUpperCase()}</p>
					<p>{character.gender?.toUpperCase()}</p>
					<p>{character.skinColor?.toUpperCase()}</p>
					<p>{character.hairColor?.toUpperCase()}</p>
					<p>{character.species?.toUpperCase()}</p>
					<p>{character.homeworld?.toUpperCase()}</p>
				</div>
			</div>
		</section>
	);
}

export default Card;
