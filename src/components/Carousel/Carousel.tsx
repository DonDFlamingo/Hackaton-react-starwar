import "./Carousel.css";

interface CarouselProps {
  cards: string[];
  onDecision: (card: string, accepted: boolean) => void;
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
      <div className="carousel-card">{currentCard}</div>
      <div className="carousel-actions">
        <button
          className="btn-refuse"
          onClick={() => onDecision(currentCard, false)}
        >
          ✕ Refuser
        </button>
        <button
          className="btn-accept"
          onClick={() => onDecision(currentCard, true)}
        >
          ✓ Accepter
        </button>
      </div>
    </div>
  );
};

export default Carousel;
