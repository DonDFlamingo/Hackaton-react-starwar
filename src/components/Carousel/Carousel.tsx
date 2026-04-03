import { useState } from "react";

import "./Carousel.css";

const placeholders = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prev = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? placeholders.length - 1 : prev - 1,
		);
	};

	const next = () => {
		setCurrentIndex((prev) =>
			prev === placeholders.length - 1 ? 0 : prev + 1,
		);
	};

	return (
		<div className="carousel">
			<button onClick={prev}>←</button>
			<div className="carousel-track">
				<div className="carousel-card">{placeholders[currentIndex]}</div>
			</div>
			<button onClick={next}>→</button>
		</div>
	);
};

export default Carousel;
