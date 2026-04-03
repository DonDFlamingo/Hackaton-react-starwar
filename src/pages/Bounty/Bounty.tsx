import { useState } from "react";
import { useLocation } from "react-router";

import Carousel from "../../components/Carousel/Carousel";
import "./Bounty.css";

interface Character {
	name: string;
	affiliations: string[];
	image?: string;
	description?: string;
	height: number;
	mass: number;
}

interface LocationState {
	characters: Character[];
	side: string;
}

const Bounty = () => {
	const { state } = useLocation() as { state: LocationState };
	const characters = state?.characters ?? [];
	const isVillain = state?.side === "Sith";

	const [currentIndex, setCurrentIndex] = useState(0);
	const [decisions, setDecisions] = useState<
		{ character: Character; accepted: boolean }[]
	>([]);
	console.log(decisions);

	const handleDecision = (character: Character, accepted: boolean) => {
		setDecisions((prev) => [...prev, { character, accepted }]);
		setCurrentIndex((prev) => prev + 1);
	};

	return (
		<div className={`bounty-page ${isVillain ? "dark-side" : "light-side"}`}>
			<div className="bounty-frame">
				<div className="carousel-ping" />
				<div className="carousel-ping delay" />
				<div className="corner top-left" />
				<div className="corner top-right" />
				<div className="corner bottom-left" />
				<div className="corner bottom-right" />
				<h1
					className={`bounty-page-h1 ${isVillain ? "dark-side" : "light-side"}`}
				>
					Welcome dear hunter, choose your next Bounties
				</h1>
				<Carousel
					cards={characters}
					onDecision={handleDecision}
					currentIndex={currentIndex}
				/>
			</div>
		</div>
	);
};

export default Bounty;
