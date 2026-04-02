import "./Card.css";
import { useLocation } from "react-router";

interface Character {
	name: string;
	affiliations: string[];
	image: string;
	id: number;
	height: number;
	mass: number;
	eyeColor?: string;
	hairColor?: string;
	skinColor?: string;
}

function Card() {
	const location = useLocation();

	// récupération du tableau envoyé par navigate
	const characters = (location.state as Character[]) || [];

	return (
		<section className="card-section">
			{characters.map((character) => (
				<div className="card-container" key={character.id}>
					<div className="container-img-info">
						<div className="card-div-img">
							<img src={`${character.image}`} alt={character.name} />
						</div>

						<div className="card-div-info">
							<p>{character.name}</p>
							<p>{character.affiliations?.join(", ")}</p>
							<p>{character.height}</p>
							<p></p>
						</div>
					</div>

					<div className="card-div-description">
						<p></p>
					</div>
				</div>
			))}
		</section>
	);
}

export default Card;
