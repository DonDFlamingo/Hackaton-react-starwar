import { useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./Bounty.css";

const placeholders = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

interface Decision {
  card: string;
  accepted: boolean;
}

const Bounty = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [decisions, setDecisions] = useState<Decision[]>([]);

  const handleDecision = (card: string, accepted: boolean) => {
    setDecisions((prev) => [...prev, { card, accepted }]);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="bounty-page">
      <h1>Je suis la page Bounty Hunters</h1>
      <Carousel
        cards={placeholders}
        onDecision={handleDecision}
        currentIndex={currentIndex}
      />
      {currentIndex >= placeholders.length && (
        <div className="bounty-summary">
          <h2>Contrats acceptés :</h2>
          <ul>
            {decisions
              .filter((d) => d.accepted)
              .map((d, i) => (
                <li key={i}>{d.card}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Bounty;
