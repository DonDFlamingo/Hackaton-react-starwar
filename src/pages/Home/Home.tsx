import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Home.css";
import Nebuleuse from "../../assets/nebuleuse.avif";
import Soleil from "../../assets/logo-sun.png";
import Lune from "../../assets/logo-moon.png";

interface Character {
	affiliations: string[];
}

function Home() {
	const [side, setSide] = useState<Character[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("https://miadil.github.io/starwars-api/api/all.json")
			.then((res) => res.json())
			.then((data) => setSide(data));
	}, []);

	const handleSelectAffiliation = (affiliationName: string) => {
		const results = side.filter((character) =>
			character.affiliations?.includes(affiliationName),
		);

		navigate("/bounty", {
			state: { characters: results, side: affiliationName },
		});
	};

	return (
		<main className="contenent-home-card">
			<h1 className="title-home-page">
				CHOOSE YOUR <br /> BOUNTIES
			</h1>
			<section className="contenent-card">
				<div
					className="card-light-side"
					style={{
						backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,150,255,0.6)), url(${Nebuleuse})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				>
					<img className="logo-home-page-sun" src={Soleil} alt="" />
					<h2 className="second-title-home-page">THE PATH OF LIGHT</h2>
					<p className="text-home-card">
						Seek connection through wisdom, diplomacy, and the <br />{" "}
						preservation of peace across the stars.
					</p>
					<button
						type="button"
						className="btn-home-page-light"
						onClick={() => handleSelectAffiliation("Jedi Order")}
					>
						LIGHT SIDE
					</button>
				</div>

				<div
					className="card-dark-side"
					style={{
						backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(255,0,0,0.6)), url(${Nebuleuse})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				>
					<img className="logo-home-page-moon" src={Lune} alt="" />
					<h2 className="second-title-home-page">THE DARK HORIZON</h2>
					<p className="text-home-card">
						Forge bonds through passion, strength, and the <br />
						unyielding pursuit of galactic dominance.
					</p>
					<button
						type="button"
						className="btn-home-page-dark"
						onClick={() => handleSelectAffiliation("Sith")}
					>
						DARK SIDE
					</button>
				</div>
			</section>
		</main>
	);
}

export default Home;
