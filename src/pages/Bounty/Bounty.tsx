import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const characters = state?.characters ?? [];
  const stored = localStorage.getItem("missions");
  const storedCompleted = localStorage.getItem("missions-completed");
  const inMission: string[] = [
    ...(stored ? JSON.parse(stored) : []),
    ...(storedCompleted ? JSON.parse(storedCompleted) : []),
  ].map((c: { name: string }) => c.name);

  const filteredCharacters = characters.filter(
    (c) => !inMission.includes(c.name),
  );
  const isVillain = state?.side === "Sith";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [decisions, setDecisions] = useState<
    { character: Character; accepted: boolean }[]
  >([]);

  const handleDecision = (character: Character, accepted: boolean) => {
    const newDecisions = [...decisions, { character, accepted }];
    setDecisions(newDecisions);

    if (currentIndex + 1 >= filteredCharacters.length) {
      const accepted = newDecisions
        .filter((d) => d.accepted)
        .map((d) => d.character);
      navigate("/mission", { state: { accepted } });
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
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
        <h1>Welcome dear hunter, choose your next Bounties</h1>
        <Carousel
          cards={filteredCharacters}
          onDecision={handleDecision}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default Bounty;
