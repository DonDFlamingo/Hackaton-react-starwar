import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Card from "../../components/Card";
import "./Mission.css";

interface Character {
  name: string;
  affiliations: string[];
  image?: string;
  description?: string;
  height: number;
  mass: number;
}

const Mission = () => {
  const { state } = useLocation() as { state: { accepted: Character[] } };

  const stored = localStorage.getItem("missions");
  const storedCompleted = localStorage.getItem("missions-completed");

  const previous: Character[] = stored ? JSON.parse(stored) : [];
  const previousCompleted: Character[] = storedCompleted
    ? JSON.parse(storedCompleted)
    : [];

  const newAccepted = state?.accepted ?? [];
  const merged = [
    ...previous,
    ...newAccepted.filter((c) => !previous.some((p) => p.name === c.name)),
  ];

  const [active, setActive] = useState<Character[]>(merged);
  const [completed, setCompleted] = useState<Character[]>(previousCompleted);

  useEffect(() => {
    localStorage.setItem("missions", JSON.stringify(active));
  }, [active]);

  useEffect(() => {
    localStorage.setItem("missions-completed", JSON.stringify(completed));
  }, [completed]);

  const handleComplete = (character: Character) => {
    setActive((prev) => prev.filter((c) => c.name !== character.name));
    setCompleted((prev) => [...prev, character]);
  };

  const handleReset = () => {
    localStorage.removeItem("missions");
    localStorage.removeItem("missions-completed");
    setActive([]);
    setCompleted([]);
  };

  return (
    <div className="mission-page">
      <h1 className="mission-title">VOS MISSIONS</h1>
      <button className="btn-reset" onClick={handleReset}>
        Réinitialiser
      </button>
      <div className="mission-columns">
        <div className="mission-column">
          <h2 className="column-title active">En cours</h2>
          <div className="mission-list">
            {active.map((character) => (
              <div key={character.name} className="mission-card-wrapper">
                <div className="card-btn-wrapper">
                  <Card character={character} />
                  <button
                    className="btn-complete"
                    onClick={() => handleComplete(character)}
                  >
                    Mission accomplie
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mission-divider" />

        <div className="mission-column">
          <h2 className="column-title completed">Accomplies</h2>
          <div className="mission-list">
            {completed.map((character) => (
              <div
                key={character.name}
                className="mission-card-wrapper completed-card"
              >
                <div className="card-overlay-wrapper">
                  <Card character={character} />
                  <div className="completed-overlay">✓</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
