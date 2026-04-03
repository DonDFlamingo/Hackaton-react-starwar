import "./Carousel.css";
import Card from "../../components/Card";

interface Character {
	name: string;
	affiliations: string[];
	image?: string;
	description?: string;
	height: number;
	mass: number;
}

interface CarouselProps {
	cards: Character[];
	onDecision: (card: Character, accepted: boolean) => void;
	currentIndex: number;
}

const Carousel = ({ cards, onDecision, currentIndex }: CarouselProps) => {
	if (currentIndex >= cards.length) {
		return (
			<div className="carousel-end">
				<h2>Tous les contrats ont été examinés.</h2>
			</div>
		);
	}

	const currentCard = cards[currentIndex];

	return (
		<div className="carousel">
			<div className="carousel-card-wrapper">
				<div className="carousel-card">
					<Card character={currentCard} />
				</div>
			</div>
			<div className="carousel-actions">
				<div className="btn-wrapper">
					<button
						className="btn-refuse"
						onClick={() => onDecision(currentCard, false)}
					>
						✕
					</button>
					<span className="btn-label">Skip</span>
				</div>
				<div className="btn-wrapper">
					<button
						className="btn-accept"
						onClick={() => onDecision(currentCard, true)}
					>
						✓
					</button>
					<span className="btn-label">Accept</span>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
