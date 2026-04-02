import { useState } from "react";
import { useLocation } from "react-router";

// import Card from "../../components/Card";
import Carousel from "../../components/Carousel/Carousel";

import "./Bounty.css";

interface Character {
  name: string;
  affiliations: string[];
}

//adriiiiiiiii : navigate("/bounty", { state: { characters: results, side: affiliationName } })
interface LocationState {
  characters: Character[];
  side: string;
}

const Bounty = () => {
  const { state } = useLocation() as { state: LocationState };
  // const characters = state?.characters ?? []; en attente du push d'adri
  const characters = state?.characters ?? [
    { name: "Luke Skywalker", affiliations: ["Jedi Order"] },
    { name: "Darth Vader", affiliations: ["Sith"] },
    { name: "Han Solo", affiliations: ["Alliance to Restore the Republic"] },
  ];
  // const isVillain = state?.side === "Sith";  //push adri

  const [currentIndex, setCurrentIndex] = useState(0);
  const [_decisions, setDecisions] = useState<
    //_decisions === on a prévu de les envoyer à une autre page plus tard via le router
    { character: Character; accepted: boolean }[]
  >([]);

  const currentCharacter = characters[currentIndex];
  const isVillain = currentCharacter?.affiliations.includes("Sith") ?? false; // force dark-side en attendant le push

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
        <h1>Je suis dans la page Bounty Hunters</h1>
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
